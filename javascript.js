// All of your book objects are going to be stored in an array, so you’ll need a constructor for books. 
// Then, add a separate function to the script (not inside the constructor) that can:
// 1.take some arguments, 2. create a book from those arguments, and 3. store the new book object into an array. 
// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). 
// This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. 
// Your code should look something like this (we’re showing only a basic skeleton without function parameters):


const myLibrary = [];


function Book(name) {
  // the constructor...
  this.name = name;
  console.log(name);
}





function addBookToLibrary(bookName) {
  // take params (ex: name), create a book then store it in the array
    Book(bookName);

}


const book1 = new Book("Hobbit");

const book2 = new Book("TestBook");
