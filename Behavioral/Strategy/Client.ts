// Client.ts
import { MapApplication } from './MapApplication';
import { FastestRouteStrategy } from './FastestRouteStrategy';
import { MostDirectRouteStrategy } from './MostDirectRouteStrategy';
import { TollRoadStrategy } from './TollRoadStrategy';

const app = new MapApplication(new FastestRouteStrategy());

// Mock current time and traffic data
const currentTime = new Date('2024-06-01T08:00:00'); 
const trafficData = {
    fastest: 30,
    leastTraffic: 35,
    tollRoad: 25
};

app.setStrategyBasedOnConditions(currentTime, trafficData);

console.log(app.findRoute('Point A', 'Point B')); 
