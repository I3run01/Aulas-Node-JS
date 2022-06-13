"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const math = __importStar(require("./math"));
let n1 = 15;
let n2 = 6;
console.log(`Soma: ${math.somar(n1, n2)}`);
console.log(`Subtrair: ${math.subtrair(n1, n2)}`);
console.log(`multiplicar: ${math.multiplicar(n1, n2)}`);
// Pode fazer também
const math_1 = require("./math");
let n3 = 8;
let n4 = 4;
console.log(`Soma: ${(0, math_1.somar)(n3, n4)}`);
console.log(`Subtrair: ${(0, math_1.subtrair)(n3, n4)}`);
