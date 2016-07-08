import * as interfaces from "./interfaces";

class UniversityLibrarian implements interfaces.Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(customerName: string) {
        console.log(this.name + " is assisting " + customerName);
    }
}

abstract class ReferenceItem {
    private _publisher: string;
    static department: string = "Research";

    constructor(public title: string, protected year: number) {
        console.log("Creating a new referenceItem...");
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;
}

export { UniversityLibrarian, ReferenceItem };
