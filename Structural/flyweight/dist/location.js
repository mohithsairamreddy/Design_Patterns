"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
// Location class
class Location {
    constructor(marker, x, y) {
        this.marker = marker;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.marker.draw(this.x, this.y);
    }
}
exports.Location = Location;
//# sourceMappingURL=location.js.map