# Tibbo WebUSB-to-RS232 Library



### Introduction

<br />

The [Tibbo Web232 board](https://tibbo.com/store/webserial/web232.html) works as a standard USB-to-RS232 adaptor, but with WebUSB support.

This JavaScript API allows web-based applications to access USB devices. WebUSB is supported by the Google Chrome browser and is also included in the Chromium open-source browser builds. If you are using Chrome (or a Chromium-based) browser, your web pages will be able to access an RS232 device connected to the Web485 board.

<br />

### Installation

To use this library, the following lines should be included in the `<head>` section of the HTML file.

```html
<script type="text/javascript" src="TibboWebSerial.min.js"></script>
```

<br />

### Initialization 

#### Instantiating Serial Object

<br />

In order to use this library, it is necessary to first instantiate the TibboWebSerial.Serial object, passing the correct device as a parameter. This is best done through an *onclick* event. The code below shows the most basic example of how to do this:

<br />

```html
<body>
    <button onclick="connectToDevice()">Connect to Device</button><br /><br />
</body>

<script>
    var serial;
    function connectToDevice() {
        const filters = [];
        navigator.usb.requestDevice({ filters: filters })
            .then(device => {
                serial = new TibboWebSerial.Serial(device);
                serial.connect();
            })
            .catch(e => {
                console.log("There is no device. " + e);
            });
    }
</script>
```

<br />

When the button is clicked, a list of available USB devices will be displayed. The device called "Web232" should be selected. An instance of `TibboWebSerial.Serial` called `serial` has now been created!

#### Declaring Callbacks

<br />

There are a number of callbacks functions available, each one is detailed here. To use a callback, it must first be declared. A good time to do this would be just after instantiating the serial object. For example, to generate a callback when a successful connection is made to the device, the `connectOK` callback could be used. First, the callback should be declared after the serial object is instantiated using the following line of code:

```javascript
serial.connectOK = this.onConnectOK;
```

<br />

Next, the body of the callback must be added. In order to display an alert when the connection is ok, the following function could be added:

<br />

```javascript
function onConnectOK() {
	alert("Successfully connected to device");
}
```

<br />

Thus, the previous example becomes:

<br />

```html
<body>
    <button onclick="connectToDevice()">Connect to Device</button><br /><br />
</body>

<script>
    var serial;
    function connectToDevice() {
        const filters = [];
        navigator.usb.requestDevice({ filters: filters })
            .then(device => {
                serial = new TibboWebSerial.Serial(device);
                serial.connectOK = this.onConnectOK;
                serial.connect();
            })
            .catch(e => {
                console.log("There is no device. " + e);
            });
    }

    function onConnectOK() {
        alert("Successfully connected to device");
    }
</script>
```

<br />

### Functions

<br />

| Function                    | Parameter                             | Description                                                  | Return Value                          |
| --------------------------- | ------------------------------------- | :----------------------------------------------------------- | ------------------------------------- |
| `setBaud(Baud)`             | Number                                | Sets baud to value passed in parameter<br />Tested on all of the standard bauds between 110 and 921600. | -                                     |
| setFlowControl(Flowcontrol) | "OFF",<br />"CTS_RTS"<br />"XON_XOFF" | Sets the flow control according to value passed passed as parameter | -                                     |
| write(data)                 | String                                | Sends data passed as parameter through the serial port       | -                                     |
| getFlowControl()            | -                                     | Returns the currently set flow control                       | "OFF",<br />"CTS_RTS"<br />"XON_XOFF" |
| toggleLINE(Line)            | LINE_STATES.RTS<br />LINE_STATES.RTS  | Toggles the line that is passed as  a parameter.             | -                                     |
| disconnect()                | -                                     | Disconnects from the Web232 board                            |                                       |

<br />

### Callbacks

<br />

| Callback                                       | Description                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| modemStateChanged(DTR, RTS, CTS, DSR, RI, DCD) | Triggered when modem state changes<br />Arguments provide the updated state of each of the 6 lines |
| flowControlChanged(flowControl)                | Triggered when flow control changes<br />Argument provides the updated flow control value |
| baudChangeOK(baud)                             | Triggered when baud successfully changes<br />Argument provides the updated baud value |
| onSerDataArrival(data)                         | Triggered when data arrives from the serial port<br />Argument provides the received data |
| onSerDataSent(data)                            | Triggered when data is sent from the serial port<br />Argument provides the sent data |
| onConnectOK()                                  | Triggered when a connection to the Web232 board is successfully established |
| onDisconnectOK()                               | Triggered when a connection to the Web232 board is successfully terminated |
| onConnectionError()                            | Triggered when a connection to the Web232 board is unexpectedly terminated, for example when the cable is unplugged |
| onConnectFail()                                | Triggered when a connection to the Web232 board is not able to be established, for example if a connection to an incompatible device is attempted. |

