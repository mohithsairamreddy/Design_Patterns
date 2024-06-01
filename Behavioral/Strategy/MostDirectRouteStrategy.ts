import { RoutingStrategy } from './RoutingStrategy';

export class MostDirectRouteStrategy implements RoutingStrategy {
    findRoute(start: string, end: string): string {
        return `Most direct route from ${start} to ${end}`;
    }
}
