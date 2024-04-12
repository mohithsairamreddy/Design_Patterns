class Light {
    turnOn() {
      console.log("Light is ON");
    }
  
    turnOff() {
      console.log("Light is OFF");
    }
  }
  
  class Thermostat {
    turnOn() {
      console.log("Thermostat is ON");
    }
  
    turnOff() {
      console.log("Thermostat is OFF");
    }
  }
  
  class SecurityCamera {
    turnOn() {
      console.log("Security Camera is ON");
    }
  
    turnOff() {
      console.log("Security Camera is OFF");
    }
  }
  
  class SmartHomeProxy {
    devices = new Map();
  
    constructor() {
      this.devices.set("livingRoomLight", new Light());
      this.devices.set("kitchenThermostat", new Thermostat());
      this.devices.set("frontDoorCamera", new SecurityCamera());
    }
  
    turnOn() {
      console.log("Proxy: Turning ON all devices");
      this.devices.forEach(device => device.turnOn());
    }
  
    turnOff() {
      console.log("Proxy: Turning OFF all devices");
      this.devices.forEach(device => device.turnOff());
    }
  
    // Additional proxy functionality
    // Access specific device through proxy
    accessDevice(deviceKey) {
      const device = this.devices.get(deviceKey);
      if (device) {
        console.log(`Proxy: Accessing ${deviceKey}`);
        device.turnOn();
      } else {
        console.log(`Proxy: Device ${deviceKey} not found`);
      }
    }
  }
  