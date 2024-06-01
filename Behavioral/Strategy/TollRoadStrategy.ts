import { RoutingStrategy } from './RoutingStrategy';

export class TollRoadStrategy implements RoutingStrategy {
    findRoute(start: string, end: string): string {
        return `Route with toll roads from ${start} to ${end}`;
    }
}
