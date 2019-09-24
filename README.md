# Tibbo WebUSB-to-RS232 Library



### Introduction



The [Tibbo Web232 board](https://tibbo.com/store/webserial/web232.html) works as a standard USB-to-RS232 adaptor, but with WebUSB support.

This JavaScript API allows web-based applications to access USB devices. WebUSB is supported by the Google Chrome browser and is also included in the Chromium open-source browser builds. If you are using Chrome (or a Chromium-based) browser, your web pages will be able to access an RS232 device connected to the Web485 board.



### Installation



### Initialization 



#### Instantiating Serial Object



In order to use this library, it is necessary to first instantiate the TibboWebSerial.Serial object, passing the correct device as a parameter. This is best done through an *onclick* event. The code below shows the most basic example of how to do this:



```
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



When the button is clicked, a list of available USB devices will be displayed. The device called "Web232" should be selected. An instance of `TibboWebSerial.Serial` called `serial` has now been created!



#### Declaring Callbacks



There are a number of callbacks functions available, each one is detailed here. To use a callback, it must first be declared. A good time to do this would be just after instantiating the serial object. For example, to generate a callback when a successful connection is made to the device, the `connectOK` callback could be used. First, the callback should be declared after the serial object is instantiated using the following line of code:



```
serial.connectOK = this.onConnectOK;
```



Next, the body of the callback must be added. In order to display an alert when the connection is ok, the following function could be added:

```
function onConnectOK() {
	alert("Successfully connected to device");
}
```



Thus, the previous example becomes:

```
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



### Functions



| Function            | Parameter Type | Description                                                  | Returns |
| ------------------- | -------------- | ------------------------------------------------------------ | ------- |
| `setBaud(Baudrate)` | Number         | Sets baudrate to value passed in parameter<br />Tested on all of the standard baudrates between 110 and 921600. | -       |
|                     |                |                                                              |         |
|                     |                |                                                              |         |
|                     |                |                                                              |         |
|                     |                |                                                              |         |
|                     |                |                                                              |         |
|                     |                |                                                              |         |

