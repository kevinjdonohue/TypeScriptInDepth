function calculateLateFee(daysLate: number): number {
    return daysLate * .25;
}

function maxBooksAllowed(age: number): number {
    if (age > 12) {
        return 3;
    } else {
        return 10;
    }
}

function privateFunc(): void {
    console.log("This is private...");
}

function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
}

export {calculateLateFee, maxBooksAllowed, Purge};
