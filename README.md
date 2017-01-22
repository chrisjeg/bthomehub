# bthomehub
A simple screen scraping module that allows you to access basic information available from your homehub. Currently, the only functionality is to get the current connected devices.

## Getting started 

To instantiate the module you can do the following:

```javascript
var homehub = require('bt-homehub')();
```

By not passing any variables to the function, it will assume the homehub UI is avaliable at 'http://192.168.1.254/'

All functions follow a promise structure, for example, to log out connected devices you can use the following:

```javascript
homehub
  .getConnectedDevices
  .then(x => console.log(x));
```
