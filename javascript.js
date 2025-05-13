// Next step: If book has been read, put a "This book has been read" message (line 80)
const myLibrary = [];

// Delete Button for created divs



function Book(name) {
  this.name = name;

//   COME BACK TO THIS ONE Assigning each book a unique ID (I might need to put the id in as a variable within Book)
  this.id = crypto.randomUUID();

  
//   Testing to see if this returns customized name
  console.log(name);
  console.log(this.id);
 

}


function addBookToLibrary(bookName) {
  // take params (ex: name), create a book then store it in the array
  // To Test: Make this into a variable and push it into array (Ex: let coolBook = Book(bookName); push coolBook into myLibrary
  let coolBook = new Book(bookName);

    // To test this, run addBookToLibrary and make it return updated myLibrary array.  
    // To add object to array: https://stackoverflow.com/questions/6254050/how-to-add-an-object-to-an-array
    myLibrary.push(coolBook);

}



// addBookToLibrary("ABC");

// addBookToLibrary("Def");

// addBookToLibrary("Harry Potter");

let bookContents = document.querySelector(".bookContents");


// In this function, I want to display myLibrary books 

function displayLibrary(){
//  Step 1: Loop through array; for each element, create a div and put the element's textContent 


// using for to loop through array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 
for (const element of myLibrary){
  const divBox = document.createElement("div");
  divBox.style.border = "1px solid black";
  bookContents.appendChild(divBox);
  divBox.textContent = element.name; 
  // Set the ID of the div to the ID of the element (in this case, the Book object ID).

  divBox.setAttribute("id", element.id);

  
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


  // Pseudocode:
  // 1. Get the ID of the input.
  // 2. Write code: if the input is pressed, then append a "this book has been read" div 
  // 3. Align the message to the very left of the div (align:right)


};

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
  bookValue = document.querySelector('#bookName').value;
  

  // Pushing the name value into the myLibrary Array 
  myLibrary.push(new Book(bookValue));


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




