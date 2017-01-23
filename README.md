# bthomehub
The BT Homehub scraper that you never knew you needed! Currently, only tested on homehub 5.

## Getting started 

To instantiate the module you can do the following:

```javascript
var homehub = require('bt-homehub')();
```

By not passing any variables to the function, it will assume the homehub UI is avaliable at 'http://192.168.1.254/'

All functions follow a promise structure, for example, to log out connected devices you can use the following:

```javascript
homehub
  .getConnectedDevices()
  .then(x => console.log(x));
```

Functions currently avaliable are:

```javascript
homehub.getConnectedDevices(); //Lists all connected device names, their mac addresses and IPs as an object
homehub.getInternetStatus(); //Returns the current internet connection status as a string
homehub.getWifiStatus(); //Returns the current wifi status as a string
```