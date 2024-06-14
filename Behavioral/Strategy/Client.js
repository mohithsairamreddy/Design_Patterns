"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Client.ts
const MapApplication_1 = require("./MapApplication");
const FastestRouteStrategy_1 = require("./FastestRouteStrategy");
const app = new MapApplication_1.MapApplication(new FastestRouteStrategy_1.FastestRouteStrategy());
// Mock current time and traffic data
const currentTime = new Date('2024-06-01T08:00:00');
const trafficData = {
    fastest: 30,
    leastTraffic: 35,
    tollRoad: 25
};
app.setStrategyBasedOnConditions(currentTime, trafficData);
console.log(app.findRoute('Point A', 'Point B'));
