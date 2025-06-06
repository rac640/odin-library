// Next step: Make name, author, and pages their own line in the div. 

const myLibrary = [];

// Delete Button for created divs

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages; 
  this.read = false;

//   COME BACK TO THIS ONE Assigning each book a unique ID (I might need to put the id in as a variable within Book)
  this.id = crypto.randomUUID();
//   Testing to see if this returns customized name

}


// To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.
// Pseudocode to put in line 91: If the read button is clicked, then it should console.log the name of the book. 
Book.prototype.readToggle=function(divCard){
  // This function should take the divBox and turn it green 
  divCard.style.backgroundColor = "green";
}





function addBookToLibrary(bookName) {
  // take params (ex: name), create a book then store it in the array
  // To Test: Make this into a variable and push it into array (Ex: let coolBook = Book(bookName); push coolBook into myLibrary
  let coolBook = new Book(bookName);

    // To test this, run addBookToLibrary and make it return updated myLibrary array.  
    // To add object to array: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
    myLibrary.push(coolBook);

}

let bookContents = document.querySelector(".bookContents");


// In this function, I want to display myLibrary books 

function displayLibrary(){
//  Step 1: Loop through array; for each element, create a div and put the element's textContent 


// using for to loop through array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
for (const element of myLibrary){
  const divBox = document.createElement("div");
  divBox.style.border = "1px solid black";
  bookContents.appendChild(divBox);


  // make a div for each value (Ex: Make a div for the name, the author, and the pages) and append to divBox 

  const nameDiv = document.createElement("div");
  nameDiv.textContent = `Name: ${element.name}`
  divBox.appendChild(nameDiv);

  const authorDiv = document.createElement("div");
  authorDiv.textContent = `Author: ${element.author}`
  divBox.appendChild(authorDiv);

  const pagesDiv = document.createElement("div");
  pagesDiv.textContent = `Pages: ${element.pages}`;
  divBox.appendChild(pagesDiv);
    
  // Set the ID of the div to the ID of the element (in this case, the Book object ID).
  divBox.setAttribute("id", element.id);
  divBox.setAttribute("class", "div-box");


  // Each div should come with a button that says if it's been read or not read. 
  const readOrNotButton = document.createElement("button");
  readOrNotButton.textContent = "Not Read";
  // Add a custom attribute for button, wher the value would be the object book ID (or div id).
  readOrNotButton.setAttribute("button-id", element.id);
  divBox.appendChild(readOrNotButton);


  // When clicking the readOrNotButton,it should toggle between read being true or false. 
  readOrNotButton.addEventListener("click", ()=>{

    // Toggle between true and false states: https://www.geeksforgeeks.org/how-to-toggle-a-boolean-using-javascript/
    element.read = element.read ? false : true;

      if (element.read ==true){
        element.read= true;
      divBox.style.backgroundColor = "green";
      readOrNotButton.textContent ="Read";
    }

    else if (element.read == false){
      divBox.style.backgroundColor ="white";
      readOrNotButton.textContent ="Not Read";
      element.read = false;

    }


  });

  if (element.read ==true){
  divBox.setAttribute("class", "greenDiv");
  readOrNotButton.textContent ="Read";
}



    // each created book div should also come with a delete button.
  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  divBox.appendChild(deleteButton);

  deleteButton.addEventListener("click", ()=>{
    // remove the associated div box
    divBox.remove();


    // Find the index of the book with the same ID as the div. 
    const index = myLibrary.findIndex(book => book.id == divBox.id);
    
    myLibrary.splice(index, 1); // Remove from array

  });

}


};





// Using Modals: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog


const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".addBookButton");

addBookButton.addEventListener("click", ()=>{
  dialog.showModal();
});


const closeButton = document.querySelector(".closeButton")
closeButton.addEventListener("click", () => {
  dialog.close();
});



// when pressing submitBookButton, put the input of book Name into myLibrary Array. 

// Putting input values into array: https://stackoverflow.com/questions/47078498/javascript-add-value-from-input-box-to-array
const submitBookButton = document.querySelector(".submitBookButton");


// When Submit Book button is clicked, the bookValue 
submitBookButton.addEventListener("click", (event)=>{

  event.preventDefault();

  bookNameValue = document.querySelector('#bookName').value;
  bookAuthorValue = document.querySelector('#author').value;
  bookPagesValue = document.querySelector('#pages').value;

  if (bookNameValue == "" || bookAuthorValue=="" || bookPagesValue==""){
    const consoleErrorMessage = new Error("Could not parse input");
    throw consoleErrorMessage;
  }

  // Pushing the name, author, and page values into the myLibrary Array 
  myLibrary.push(new Book(bookNameValue, bookAuthorValue, bookPagesValue));

  

 



//  If bookContents (which acts as a display) is empty, then display the library. Else, clear the bookContents text content and display the library. 
//  I'm proud of myself for coming up with this solution, because I wrote out the logic to solve the problem, and took a methodical approach (rather than randomly changing variables until it worked).

if (bookContents.textContent==''){
  displayLibrary();
  }
  else if (bookContents.textContent !==''){
    bookContents.textContent = '';
    displayLibrary();
  }





});




