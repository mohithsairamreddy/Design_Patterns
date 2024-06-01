import { RoutingStrategy } from './RoutingStrategy';

export class FastestRouteStrategy implements RoutingStrategy {
    findRoute(start: string, end: string): string {
        return `Fastest route from ${start} to ${end}`;
    }
}
