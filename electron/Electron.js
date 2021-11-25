"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electron = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
class Electron {
    settings;
    constructor(options) {
        this.settings = (0, deepmerge_1.default)({}, options);
    }
}
exports.Electron = Electron;
