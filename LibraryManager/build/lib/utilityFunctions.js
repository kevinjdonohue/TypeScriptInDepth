"use strict";
function calculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.calculateLateFee = calculateLateFee;
function maxBooksAllowed(age) {
    if (age > 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.maxBooksAllowed = maxBooksAllowed;
function privateFunc() {
    console.log("This is private...");
}
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
//# sourceMappingURL=utilityFunctions.js.map