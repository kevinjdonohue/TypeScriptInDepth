var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFee = calculateLateFee;
        function maxBooksAllowed(age) {
            if (age > 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.maxBooksAllowed = maxBooksAllowed;
        function privateFunc() {
            console.log("This is private...");
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
//# sourceMappingURL=utilityFunctions.js.map