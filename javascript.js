// Next step: include input labels

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

// using for to loop through array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
for (const element of myLibrary){
  const divBox = document.createElement("div");
  divBox.style.border = "1px solid black";
  bookContents.appendChild(divBox);
  divBox.textContent = element; 
}

};



const addBookButton = document.querySelector(".addBookButton");

addBookButton.addEventListener("click", displayBookForm);

function displayBookForm(){

// To help create form elements: https://stackoverflow.com/questions/6964927/how-to-create-a-form-dynamically-via-javascript

  let formElement = document.createElement("form");
  formElement.style.border= "1px solid blue";
  formElement.style.padding = "10px";
  
  formElement.setAttribute('method', 'post');

  let inputName = document.createElement("input");
    inputName.setAttribute("type", "text");

  let inputAuthor = document.createElement("input");
    inputAuthor.setAttribute("type", "text");

  let inputPages = document.createElement("input");
    inputPages.setAttribute("type", "number");



  formElement.appendChild(inputName);
  formElement.appendChild(inputAuthor);
  formElement.appendChild(inputPages);

  // Append the form to the form contents div 

  const formContentsDiv = document.querySelector(".formContents");

  formContentsDiv.appendChild(formElement);



}


// Could use setAttribute and appendChild 