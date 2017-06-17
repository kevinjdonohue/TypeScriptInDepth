"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var shelf_1 = require("./shelf");
function getAllBooks() {
    var books = [
        { id: 1, title: "Ulysses", author: "James Joyce", available: true, category: enums_1.Category.Fiction },
        { id: 2, title: "A Farewell to Arms", author: "Ernest Hemingway", available: false, category: enums_1.Category.Fiction },
        { id: 3, title: "I Know Why the Caged Bird Sings", author: "Maya Angelou", available: true, category: enums_1.Category.Poetry },
        { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available: " + firstAvailable);
}
function getBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; });
}
function createCustomerId(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function getTitles(bookProperty) {
    var allBooks = getAllBooks();
    var foundTitles = [];
    if (typeof (bookProperty) === "string") {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof (bookProperty) === "boolean") {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        _super.apply(this, arguments);
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper("The Gazette", 2016);
var inventory = [
    { id: 10, title: "The C Programming Language", author: "K & R", available: true, category: enums_1.Category.Software },
    { id: 11, title: "Code Complete", author: "Steve McConnell", available: true, category: enums_1.Category.Software },
    { id: 12, title: "8-Bit Graphics with Cobol", author: "A. B.", available: true, category: enums_1.Category.Software },
    { id: 13, title: "Cool autoexec.bat Scripts!", author: "C. D.", available: true, category: enums_1.Category.Software }
];
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazines = [
    { title: "Programming Language Monthly", publisher: "Code Mags" },
    { title: "Literary Fiction Quarterly", publisher: "College Press" },
    { title: "Five Points", publisher: "GSU" }
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
var softwareBook = bookShelf.find("Code Complete");
var cabins = [
    { id: 1, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 2, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 3, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 4, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 5, price: "$20", isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 6, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 7, price: null, isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: false },
    { id: 8, price: "$15", isFirstClass: true, isCoachCabin: false, isBusinessClass: false, hasPreferredPlusSeats: false, hasPremiumClassSeats: true }
];
var filteredCabins = cabins.filter(function (cabin) {
    return (cabin.price !== null) && (cabin.hasPreferredPlusSeats || cabin.hasPremiumClassSeats);
});
console.log("cabins.length: " + cabins.length);
console.log("filteredCabins.length: " + filteredCabins.length);
console.log("id: " + filteredCabins[0].id);
console.log("price: " + filteredCabins[0].price);
//# sourceMappingURL=app.js.map