/// <reference path="utilityFunctions.ts" />

import util = Utility.Fees;

let fee = util.calculateLateFee(10);
console.log(`Fee: ${fee}`);
