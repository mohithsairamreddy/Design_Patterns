"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapApplication = void 0;
const FastestRouteStrategy_1 = require("./FastestRouteStrategy");
const MostDirectRouteStrategy_1 = require("./MostDirectRouteStrategy");
const TollRoadStrategy_1 = require("./TollRoadStrategy");
class MapApplication {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setRoutingStrategy(strategy) {
        this.strategy = strategy;
    }
    findRoute(start, end) {
        return this.strategy.findRoute(start, end);
    }
    setStrategyBasedOnConditions(currentTime, trafficData) {
        const hours = currentTime.getHours();
        const isPeakHours = (hours >= 7 && hours <= 10) || (hours >= 16 && hours <= 19);
        if (isPeakHours) {
            if (Math.abs(trafficData.fastest - trafficData.leastTraffic) <= 10) {
                this.setRoutingStrategy(new TollRoadStrategy_1.TollRoadStrategy());
            }
            else {
                this.setRoutingStrategy(new FastestRouteStrategy_1.FastestRouteStrategy());
            }
        }
        else {
            this.setRoutingStrategy(new MostDirectRouteStrategy_1.MostDirectRouteStrategy());
        }
    }
}
exports.MapApplication = MapApplication;
