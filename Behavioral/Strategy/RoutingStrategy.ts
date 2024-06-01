export interface RoutingStrategy {
    findRoute(start: string, end: string): string;
}
