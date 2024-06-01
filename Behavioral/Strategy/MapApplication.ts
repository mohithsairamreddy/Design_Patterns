import { RoutingStrategy } from './RoutingStrategy';
import { FastestRouteStrategy } from './FastestRouteStrategy';
import { MostDirectRouteStrategy } from './MostDirectRouteStrategy';
import { TollRoadStrategy } from './TollRoadStrategy';

export class MapApplication {
    private strategy: RoutingStrategy;

    constructor(strategy: RoutingStrategy) {
        this.strategy = strategy;
    }

    setRoutingStrategy(strategy: RoutingStrategy) {
        this.strategy = strategy;
    }

    findRoute(start: string, end: string): string {
        return this.strategy.findRoute(start, end);
    }

    setStrategyBasedOnConditions(currentTime: Date, trafficData: any) {
        const hours = currentTime.getHours();
        const isPeakHours = (hours >= 7 && hours <= 10) || (hours >= 16 && hours <= 19);

        if (isPeakHours) {
            if (Math.abs(trafficData.fastest - trafficData.leastTraffic) <= 10) {
                this.setRoutingStrategy(new TollRoadStrategy());
            } else {
                this.setRoutingStrategy(new FastestRouteStrategy());
            }
        } else {
            this.setRoutingStrategy(new MostDirectRouteStrategy());
        }
    }
}
