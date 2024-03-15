// const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneBtn");
const newFortuneInput = document.getElementById("new-fortune-input");

const addfortuneBtn = document.getElementById("addFortuneBtn");


const deleteFortuneSelection = document.getElementById("delete-fortune-selection");
const deleteFortuneSubmit = document.getElementById("delete-fortune-btn");

const baseURL = "http://localhost:4000";

// const getCompliment = () => {
//     axios.get("http://localhost:4000/api/compliment/").then((res) => {
//         const data = res.data;
//         alert(data);
//     });
// };

const pageInit = () => {
    axios.get(`${baseURL}/`).then((res) => {
        const data = res.data;
        data.forEach((fortune) => {
            let i = 0;
            console.log("fortune:", fortune);

            const option = document.createElement("option");
            option.innerHTML = fortune;
            option.value = fortune[i];
            deleteFortuneSelection.appendChild(option);
            i++;
        });
    });
};

pageInit();

const getFortune = () => {
    axios
        .get(`${baseURL}/api/fortune`)
        .then((res) => {
            const data = res.data;
            alert(data);
        })
        .catch(() => {focus
            console.log("Error");
        });
};

const postFortune = () => {
    axios
        .post(`${baseURL}/api/fortune`, {
            fortune: newFortuneInput.value
            
        })

        .then((res) => {
            const data = res.data;
            alert(data[data.length-1]);
        })
        .catch(() => {
            console.log("Error");
        });
};


const deleteFortuneRequest = (deleteFortuneSelection) => {
    axios
        .delete(`${baseURL}/api/fortune`, {
            "fortune": deleteFortuneSelection})
        .then((res) => {

            const data = res.data;
            console.log('data:', data);
            
            //delete the option from the Selection
            let option = document.querySelector(`option[value="${fortuneToDelete.value}"]`);
            option.remove();
        })
        .catch(() => {
            console.log("Error");
        });
}


deleteFortuneSubmit.addEventListener("click", deleteFortuneRequest);

addfortuneBtn.addEventListener("click", postFortune);

fortuneBtn.addEventListener("click", getFortune);

// complimentBtn.addEventListener("click", getCompliment);
