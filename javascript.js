// Next step: Split up arrays into different divs with a border

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
//  Step 1: Loop through array; for each element, create a div and put the element's textContent 

let libraryElements = myLibrary;

const bookContents = document.querySelector(".bookContents");

bookContents.textContent = libraryElements;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
for (const element of myLibrary){
  const divBox = document.createElement("div");
  divBox.style.border = "1px solid black";
  bookContents.appendChild(divBox);

  divBox.textContent = element;
  // AppendChild 
}





  // Step 1: Create a new div for each book  const div = document.createElement("div");
  // for (i = 0; i < myLibrary.length +1; i++){
    
  //   const div = document.createElement("div");
  //   console.log(`this is div number ${i} `);
  // };


};