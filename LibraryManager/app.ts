import { Category } from "./enums";
import { Book, Logger, Author, Librarian, Magazine } from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import { calculateLateFee as CalcFee, maxBooksAllowed, Purge } from "./lib/utilityFunctions";
import refBook from "./encyclopedia";
import Shelf from "./shelf";

function getAllBooks(): Book[] {

    let books: Array<Book> = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction }
    ];

    return books;
}

function logFirstAvailable(books: Array<Book>): void {

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
// myPaper.printCitation();


let inventory: Array<Book> = [
    { id: 10, title: "The C Programming Language", author: "K & R", available: true, category: Category.Software },
    { id: 11, title: "Code Complete", author: "Steve McConnell", available: true, category: Category.Software },
    { id: 12, title: "8-Bit Graphics with Cobol", author: "A. B.", available: true, category: Category.Software },
    { id: 13, title: "Cool autoexec.bat Scripts!", author: "C. D.", available: true, category: Category.Software }
];

let bookShelf: Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook: Book = bookShelf.getFirst();

let magazines: Array<Magazine> = [
    { title: "Programming Language Monthly", publisher: "Code Mags" },
    { title: "Literary Fiction Quarterly", publisher: "College Press" },
    { title: "Five Points", publisher: "GSU" }
];

let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();

// magazineShelf.printTitles();

let softwareBook = bookShelf.find("Code Complete");

interface Cabin {
    id: number,
    price: string | null,
    isFirstClass: boolean,
    isCoachCabin: boolean,
    isBusinessClass: boolean,
    hasPreferredPlusSeats: boolean,
    hasPremiumClassSeats: boolean

}

let cabins: Cabin[] = [
    { id: 1, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 2, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 3, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 4, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 5, price: "$20", isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 6, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 7, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 8, price: "$15", isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: true }
];

// for (let cabin of cabins) {
//     if (cabin.price) {
//         price = cabin.price;
//         break;
//     }
// }

// function findPrice(cabins)

// var filteredCabins = cabins.filter(function(cabin) {
//     return (cabin.price !== null) && (cabin.hasPremiumClassSeats || cabin.hasPreferredPlusSeats);
// });

let filteredCabins: Cabin[] = cabins.filter((cabin) => {
    return (cabin.price !== null) && (cabin.hasPreferredPlusSeats || cabin.hasPremiumClassSeats);
});

console.log("cabins.length: " + cabins.length);

console.log("filteredCabins.length: " + filteredCabins.length);

console.log("id: " + filteredCabins[0].id);

console.log("price: " + filteredCabins[0].price);

// console.log(`price: ${price}`);

// console.log(`${softwareBook.title} (${softwareBook.author})`);
