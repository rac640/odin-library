// Next step: Make function to go through myLibrary and display books in a card format. 

const myLibrary = [];


function Book(name) {
  this.name = name;

//   COME BACK TO THIS ONE Assigning each book a unique ID (I might need to put the id in as a variable within Book)
  this.id = crypto.randomUUID();

  
//   Testing to see if this returns customized name
  console.log(name);
  console.log(id);
  return name;
}


function addBookToLibrary(bookName) {
  // take params (ex: name), create a book then store it in the array
  // To Test: Make this into a variable and push it into array (Ex: let coolBook = Book(bookName); push coolBook into myLibrary
  let coolBook = Book(bookName);

    // To test this, run addBookToLibrary and make it return updated myLibrary array.  
    // To add object to array: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
    myLibrary.push(coolBook);

}


addBookToLibrary("ABC");

addBookToLibrary("Def");

addBookToLibrary("Harry Potter");



// In this function, I want to display myLibrary books 

function displayLibrary(){

// Test: Display myLibrary elements 
let libraryElements = myLibrary.toString();

const bookContents = document.querySelector(".bookContents");

bookContents.textContent = libraryElements;



  // Step 1: Create a new div for each book  const div = document.createElement("div");
  // for (i = 0; i < myLibrary.length +1; i++){
    
  //   const div = document.createElement("div");
  //   console.log(`this is div number ${i} `);
  // };


};