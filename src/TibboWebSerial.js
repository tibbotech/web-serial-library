const CONTROL_COMMANDS = {
    IFC_ENABLE: 0x00,
    SET_BAUDDIV: 0x01,
    GET_BAUDDIV: 0x02,
    SET_LINE_CTL: 0x03,
    GET_LINE_CTL: 0x04,
    SET_BREAK: 0x05,
    IMM_CHAR: 0x06,
    SET_MHS: 0x07,
    GET_MDMSTS: 0x08,
    SET_XON: 0x09,
    SET_XOFF: 0x0A,
    SET_EVENTMASK: 0x0B,
    GET_EVENTMASK: 0x0C,
    GET_EVENTSTATE: 0x16,
    SET_CHAR: 0x0D,
    GET_CHARS: 0x0E,
    GET_PROPS: 0x0F,
    GET_COMM_STATUS: 0x10,
    RESET: 0x11,
    PURGE: 0x12,
    SET_FLOW: 0x13,
    GET_FLOW: 0x14,
    EMBED_EVENTS: 0x15,
    GET_BAUDRATE: 0x1D,
    SET_BAUDRATE: 0x1E,
    SET_CHARS: 0x19,
    VENDOR_SPECIFIC: 0xFF
};

const LINE_STATES = {
    DTR: 1,
    RTS: 2,
    CTS: 16,
    DSR: 32,
    RI: 64,
    DCD: 128
};

const FLOW_CONTROL = {
    OFF: [0, 0, 0, 0],
    CTS_RTS: [8, 144, 0, 0],
    XON_XOFF: [0, 19, 400, 400]
};

const SPECIAL_CHARACTERS = {
    EOFCHAR: { index: 0, value: 0 },
    ERRORCHAR: { index: 1, value: 0 },
    BREAKCHAR: { index: 2, value: 0 },
    EVENTCHAR: { index: 3, value: 0 },
    XONCHAR: { index: 4, value: 17 },
    XOFFCHAR: { index: 5, value: 19 }
};

const DECODER = new TextDecoder();

let bufferedData = '';

class Serial {
    constructor(device, options) {
        this.usb = device;
        this.requestTimedOut = false;
        this.modemState = null;
        this.DTR = null;
        this.RTS = null;
        this.CTS = null;
        this.DSR = null;
        this.RI = null;
        this.DCD = null;

        this.modemStateChanged = undefined;
        this.getFlowControlCallback = undefined;
        this.flowControlChanged = undefined;
        this.baudChangeOK = undefined;
        this.serDataArrival = undefined;
        this.serDataSent = undefined;
        this.connectFail = undefined;
        this.connectOK = undefined;
        this.disconnectOK = undefined;
        this.connectionError = undefined;

        this.autoReadData = options !== undefined && options.autoReadData !== undefined ? options.autoReadData : true;
        this.flowControl = options !== undefined && options.flowControl !== undefined ? options.flowControl : 'OFF';
        this.baud = options !== undefined && options.baud !== undefined ? options.baud : 38400;
        this.encoding = options !== undefined && options.encoding !== undefined ? options.encoding : '';

    }

    async connect() {
        try {
            await this.usb.open();
            await this.usb.selectConfiguration(1);
            await this.usb.claimInterface(0);
            await this.enable();
            await this.setBaud(this.baud);
            await this.setFlowControl(this.flowControl);
            this.setTimers();
            if (this.connectOK) this.connectOK();
        } catch (ex) {
            if (this.connectFail) this.connectFail();
        }
    }

    async enable() {
        await this.usb.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.IFC_ENABLE,
            index: 0x00,
            value: 0x01
        });
    }

    setTimers() {
        if (this.dataTimer !== undefined) {
            clearInterval(this.dataTimer);
        }
        this.dataTimer = setInterval(this.readTimer.bind(this), 1);
        this.canRead = true;
        if (this.modemStateTimer !== undefined) {
            clearInterval(this.modemStateTimer);
        }
        this.modemStateTimer = setInterval(this.getModemState.bind(this, this.usb), 1);
    }

    async disconnect() {
        clearInterval(this.dataTimer);
        clearInterval(this.modemStateTimer);
        await this.usb.close();
        if (this.disconnectOK) this.disconnectOK();
    }

    updateModemState(modemState) {
        this.modemState = modemState;
        this.DTR = (modemState & LINE_STATES.DTR) > 0 ? 1 : 0;
        this.RTS = (modemState & LINE_STATES.RTS) > 0 ? 1 : 0;
        this.CTS = (modemState & LINE_STATES.CTS) > 0 ? 1 : 0;
        this.DSR = (modemState & LINE_STATES.DSR) > 0 ? 1 : 0;
        this.RI = (modemState & LINE_STATES.RI) > 0 ? 1 : 0;
        this.DCD = (modemState & LINE_STATES.DCD) > 0 ? 1 : 0;
    }

    async setBaud(baud) {
        this.baud = baud;
        let arr = [0, 0, 0, 0];
        for (let i = 0; i < arr.length; i++) {
            let byte = baud & 0xff;
            arr[i] = byte;
            baud = (baud - byte) / 256;
        }
        await this.usb.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.SET_BAUDRATE,
            index: 0x00,
            value: 0
        }, new Uint8Array(arr));
        if (this.baudChangeOK) this.baudChangeOK(this.baud);
    }

    async initializeSpecialCharacters() {
        this.setChar(SPECIAL_CHARACTERS.XOFFCHAR.index, SPECIAL_CHARACTERS.XOFFCHAR.value);
        this.setChar(SPECIAL_CHARACTERS.XONCHAR.index, SPECIAL_CHARACTERS.XONCHAR.value);
    }

    async setChar(SpecialCharacterIndex, SpecialCharacterValue) {
        await this.usb.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.SET_CHAR,
            index: 0x00,
            value: ((SpecialCharacterIndex << 8) & 0xFF00) | SpecialCharacterValue
        });
    }

    async setMHS(value) {
        await this.usb.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.SET_MHS,
            index: 0x00,
            value: value | 0x200 | 0x100
        });
    }

    async getBaud() {
        await this.usb.controlTransferIn({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.SET_BAUDDIV,
            index: 0x00,
            value: 0x0
        }, 1);
    }

    async getModemState() {
        let result = await this.usb.controlTransferIn({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.GET_MDMSTS,
            index: 0x00,
            value: 0x0
        }, 1);
        result = result.data.getInt8();
        if (result !== this.modemState) {
            this.updateModemState(result);
            if (this.modemStateChanged) {
                this.modemStateChanged(this.DTR, this.RTS, this.CTS, this.DSR, this.RI, this.DCD);
            }
        }
    }

    async getFlowControl() {
        let result = await this.usb.controlTransferIn({
            requestType: 'vendor',
            recipient: 'device',
            request: CONTROL_COMMANDS.GET_FLOW,
            index: 0x00,
            value: 0x0
        }, 16);
        var arr = new Int32Array(result.data.buffer);
        arr = JSON.stringify(Array.from(arr));
        const entries = Object.entries(FLOW_CONTROL);
        for (let i = 0; i < entries.length; i++) {
            if (JSON.stringify(entries[i][1]) === arr) {
                if (this.getFlowControlCallback) this.getFlowControlCallback(entries[i][0]);
            }
        }
    }

    async setFlowControl(value) {
        let arr = FLOW_CONTROL[value];
        await this.usb.controlTransferOut({
            requestType: 'vendor',
            recipient: 'device',
            request: 0x13,
            index: 0x00,
            value: 0x0
        }, new Int32Array(arr));
        if (this.flowControlChanged) this.flowControlChanged(value);
    }

    async write(data) {
        var a = new Uint8Array();
        var enc = new TextEncoder();
        a = enc.encode(data);
        if (a.length > 0) {
            await this.usb.transferOut(2, a);
            if (this.serDataSent) this.serDataSent(data);
        }
    }

    async toggleLINE(line) {
        await this.setMHS(line ^ this.modemState);
        console.log('Line toggled');
    }

    async read() {
        if (bufferedData !== '') {
            this.serDataArrival(bufferedData);
            bufferedData = '';
        }
    }

    async autoRead() {
        const r = await this.usb.transferIn(2, 64);
        return new Uint8Array(r.data.buffer);
    }

    async readTimer() {
        if (this.canRead && this.usb != null) {
            this.canRead = false;
            try {
                let data = await this.autoRead();
                if (data) {
                    if (this.encoding === 'UTF8') {data = DECODER.decode(data);}
                    if (this.encoding === 'HEX') {data = this.byteToHexString(data);}
                    if (this.serDataArrival !== undefined) {
                        if (this.autoReadData) {
                            this.serDataArrival(data);
                        } else {
                            bufferedData = bufferedData + data;
                        }
                    }
                }
            } catch (ex) {
                if (ex.name === 'NotFoundError' && ex.code === 8 && ex.message.indexOf('disconnected') >= 0) {
                    clearInterval(this.dataTimer);
                    clearInterval(this.modemStateTimer);
                    if (this.connectionError) this.connectionError();
                }
            }
            this.canRead = true;
        }
    }

    byteToHexString(uint8arr) {
        if (!uint8arr) {
            return '';
        }
        let hexStr = '';
        for (let i = 0; i < uint8arr.length; i++) {
            let hex = (uint8arr[i] & 0xff).toString(16);
            hex = (hex.length === 1) ? '0' + hex : hex;
            hexStr += hex;
        }
        return hexStr.toUpperCase();
    }

}

module.exports = { Serial, LINE_STATES, FLOW_CONTROL };
