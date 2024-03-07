const message = document.querySelector("#message");

addMovie = (event) => {
    event.preventDefault();
    const inputField = document.querySelector("input");
    const movie = document.createElement("li");
    
    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener("click", crossOffMovie);
    movie.appendChild(movieTitle);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    movie.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteMovie);
    
    const list = document.querySelector("ul");
    list.appendChild(movie);
    document.querySelector("input").value = "";
};
function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted.";
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")) {
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back.";
    }
    revealMessage();
}

function revealMessage() {
    message.classList.remove("hide");
    setTimeout(() => {
        message.classList.add("hide");
    }, 1000);
}

const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addMovie);

// Create a function called revealMessage.

//Inside the function, call setTimeout,

//passing in a callback function
//and a time in milliseconds.

// CALLBACK add the hide class to message

//second argument, pass in the number 1000
// At the bottom of the deleteMovie function, call revealMessage

// Invoke revealMessage at the bottom of the crossOffMovie function
// Test out your code – your notification message should disappear after the amount of milliseconds you prescribed. But it only works the first time! No new messages are showing up for subsequent actions. Let’s fix that.
// At the top of the revealMessage function, remove the hide class from message – this will ensure that the message isn’t hidden when the function is first called.
