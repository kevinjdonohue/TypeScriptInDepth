import { Category } from "./enums";
import { Book, Logger, Author, Librarian } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import { calculateLateFee as CalcFee, maxBooksAllowed } from "./lib/utilityFunctions";
import refBook from "./encyclopedia";

function getAllBooks(): Book[] {

    let books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction }
    ];

    return books;
}

function logFirstAvailable(books): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}

function getBookTitlesByCategory(categoryFilter: Category): Array<string> {

    console.log("Getting books in category: " + Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function getBookById(id: number): Book[] {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id);
}

function createCustomerId(name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string) {
    console.log("Creating customer " + name);

    if (age) {
        console.log("Age: " + age);
    }

    if (city) {
        console.log("City: " + city);
    }
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];

function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    const foundTitles: string[] = [];

    if (typeof (bookProperty) === "string") {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof (bookProperty) === "boolean") {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function printBook(book: Book): void {
    console.log(book.title + " by " + book.author);
}

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
};

let myPaper = new Newspaper("The Gazette", 2016);
myPaper.printCitation();

// class Novel extends class { title: string } {
//     mainCharacter: string;
// };


// let refBook: ReferenceItem = new Encyclopedia("WorldPedia", 1900, 10);
// refBook.printItem();
// refBook.printCitation();

// let myBook: Book = {
//     id: 5,
//     title: "Pride and Prejudice",
//     author: "Jane Austen",
//     available: true,
//     category: Category.Fiction,
//     pages: 250,
//     markDamaged: (reason: string) => console.log("Damaged: " + reason)
// };

// let logDamage: DamageLogger;
//
// logDamage = (damage: string) => console.log("Damage reported: " + damage);
// logDamage("coffee stains");
//
// let favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Sharon";
// favoriteLibrarian.assistCustomer("Lynda");
//
// let ref: ReferenceItem = new ReferenceItem("Updated Facts and Figures", 2012);
// ref.printItem();
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);

// printBook(myBook);
// myBook.markDamaged("torn pages");

// let x: number;
//
// let idGenerator: (chars: string, nums: number) => string;
//
// idGenerator = createCustomerId;
//
// let myId: string = idGenerator("daniel", 10);
// console.log(myId);

// const fictionBooks = getBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((value, index, array) => console.log(++index + " - " + value));
