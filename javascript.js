// All of your book objects are going to be stored in an array, so you’ll need a constructor for books. 
// Then, add a separate function to the script (not inside the constructor) that can:
// 1.take some arguments, 2. create a book from those arguments, and 3. store the new book object into an array. 
// Also, all of your book objects should have a unique id, which can be generated using crypto.randomUUID(). 
// This ensures each book has a unique and stable identifier, preventing issues when books are removed or rearranged. 
// Your code should look something like this (we’re showing only a basic skeleton without function parameters):


const myLibrary = [];


function Book(name) {
  this.name = name;
//   Testing to see if this returns customized name
  console.log(name);
  return name;
}





function addBookToLibrary(bookName) {
  // take params (ex: name), create a book then store it in the array
  // To Test: Make this into a variable and push it into array (Ex: let coolBook = Book(bookName); push coolBook into myLibrary)
    let coolBook = Book(bookName);

    // Next Step: Add Book object to myLibrary Array 
    // To test this, run addBookToLibrary and make it return updated myLibrary array.  
    // To add object to array: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
    myLibrary.push(coolBook);
}

addBookToLibrary("Hahaha");
addBookToLibrary("Abc");
addBookToLibrary("Harry Potter");