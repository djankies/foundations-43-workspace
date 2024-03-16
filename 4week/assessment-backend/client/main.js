const fortuneBtn = document.getElementById("fortuneBtn"); // Button to get a random fortune
const addFortuneInput = document.getElementById("add-fortune-input"); // Input field to add a new fortune
const addFortuneBtn = document.getElementById("addFortuneBtn"); // Button to add a new fortune
const deleteFortuneSelection = document.getElementById("delete-fortune-selection"); // Dropdown to select a fortune to delete
const deleteFortuneSubmit = document.getElementById("delete-fortune-btn"); // Button to delete a selected fortune
const changeFortuneBtn = document.getElementById("change-fortune-btn"); // Button to change a fortune
const newFortuneInput = document.getElementById("new-fortune-input"); // Input field to enter a new fortune
const defaultOption = document.getElementById("default-option"); // Default option for the deleteFortuneSelection dropdown
const baseURL = "http://localhost:4000"; // Base URL for API requests

// Function to initialize the page
const pageInit = () => {
    axios.get(`${baseURL}/`)
        .then((res) => {
            const data = res.data;
            data.forEach((fortune) => {
                const option = document.createElement("option");
                option.innerHTML = fortune;
                option.value = fortune;
                deleteFortuneSelection.appendChild(option);
            });
        })
        .catch((err) => {
            console.log("Error initializing the page:", err);
        });
};

// Function to add a new fortune
const postFortune = () => {
    axios.post(`${baseURL}/api/fortune`, {
            fortune: addFortuneInput.value,
        })
        .then((res) => {
            const data = res.data;
            alert(`"${data[data.length - 1]}" has been added!`);
        })
        .catch(() => {
            console.log("Error adding a new fortune");
            alert("Error adding a new fortune");
        });
};

// Function to delete a fortune
const deleteFortuneRequest = () => {
    axios.delete(`${baseURL}/api/fortune`, {
            data: {
                fortune: deleteFortuneSelection.value,
            },
        })
        .then((res) => {
            const data = res.data;
            const status = res.status;
            const statusText = res.statusText;
            console.log('status:', status);
            console.log('statusText:', statusText);
            
            
            alert(deleteFortuneSelection.value + " has been deleted!");
        })
        .catch(() => {
            console.log("Error deleting a fortune");

        });
};

// Function to get a random fortune
const getFortune = () => {
    axios.get(`${baseURL}/api/fortune`)
        .then((res) => {
            const fortune = res.data;
            alert(fortune);
        })
        .catch(() => {
            console.log("Error getting a fortune");
            alert("Error getting a fortune");
        });
};

// Function to change a fortune
const putFortune = () => {
    axios.put(`${baseURL}/api/fortune`, {
            oldFortune: deleteFortuneSelection.value,
            newFortune: newFortuneInput.value,
        })
        .then((res) => {
            const data = res.data;
            console.log(
                `"${deleteFortuneSelection.value}" has been changed to "${newFortuneInput.value}"!`
            );
            alert(`"${deleteFortuneSelection.value}" has been changed to "${newFortuneInput.value}"!`);
        })
        .catch(() => {
            console.log("Error changing a fortune:");
            alert("Error changing a fortune:");
        });
};

// Function to update the text in the newFortuneInput field when a fortune is selected
const updateText = () => {
    if (deleteFortuneSelection.value !== "Select a fortune...") {
        changeFortuneBtn.classList.remove("hidden");
        deleteFortuneSubmit.classList.remove("hidden");
        newFortuneInput.classList.remove("hidden");
        defaultOption.classList.add("hidden");
        newFortuneInput.value = deleteFortuneSelection.value;


    }
};

// Event listeners
deleteFortuneSelection.addEventListener("change", updateText); // Update text when a fortune is selected
deleteFortuneSubmit.addEventListener("click", deleteFortuneRequest); // Delete a selected fortune
addFortuneBtn.addEventListener("click", postFortune); // Add a new fortune
fortuneBtn.addEventListener("click", getFortune); // Get a random fortune
changeFortuneBtn.addEventListener("click", putFortune); // Change a fortune

// Initialize the page
pageInit();
