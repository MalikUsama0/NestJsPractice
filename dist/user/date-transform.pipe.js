"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseDatePipe = void 0;
const common_1 = require("@nestjs/common");
let ParseDatePipe = class ParseDatePipe {
    transform(value, metadata) {
        console.log(metadata, "metadata");
        const { metatype } = metadata;
        console.log(metatype, "metadafddf");
        const date = this.convertTimestamp(value);
        if (!date || isNaN(+date)) {
            throw new common_1.BadRequestException("Invalid date");
        }
        switch (metatype) {
            case String:
                return date.toUTCString;
            case Date:
                return date;
            case Number:
                return date.getTime();
            default:
                return date.toISOString();
        }
    }
    convertTimestamp(timestamp) {
        timestamp = +timestamp;
        const isSecond = !(timestamp > (Date.now() + 24 * 60 * 60 * 1000) / 1000);
        return isSecond ? new Date(timestamp * 1000) : new Date(timestamp);
    }
};
exports.ParseDatePipe = ParseDatePipe;
exports.ParseDatePipe = ParseDatePipe = __decorate([
    (0, common_1.Injectable)()
], ParseDatePipe);
//# sourceMappingURL=date-transform.pipe.js.map