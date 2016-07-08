"use strict";
var Shelf = (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    Shelf.prototype.find = function (title) {
        return this._items.filter(function (item) { return item.title === title; })[0];
    };
    Shelf.prototype.printTitles = function () {
        this._items.forEach(function (item) { return console.log(item.title); });
    };
    return Shelf;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Shelf;
//# sourceMappingURL=shelf.js.map