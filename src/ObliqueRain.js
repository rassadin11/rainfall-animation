"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ObliqueRain = ({ dropletsAmount, amplitude }) => {
    let nbDrop = +dropletsAmount;
    let halfDroplets = Math.floor(nbDrop / 2);
    let droplets = [];
    let positions = [];
    function computePosition(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let i = 0; i < halfDroplets; i++) {
        let dropLeft = computePosition(0, document.body.clientWidth * 2);
        let dropTop = computePosition(document.body.clientHeight - 1000, document.body.clientHeight);
        positions.push([dropLeft, dropTop]);
        droplets.push(react_1.default.createElement("div", { key: i, className: "droplet", style: {
                left: dropLeft + 'px',
                top: dropTop + "px"
            } }));
    }
    for (let i = 0; i < halfDroplets; i++) {
        droplets.push(react_1.default.createElement("div", { key: `${i + halfDroplets} `, className: "droplet", style: {
                left: positions[i][0] + +amplitude + 'px',
                top: positions[i][1] - 1000 + "px"
            } }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, droplets));
};
exports.default = ObliqueRain;
