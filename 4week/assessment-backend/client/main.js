const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneBtn");
const addfortuneBtn = document.getElementById("addFortuneBtn");
const deleteFortuneDropdown = document.getElementById("delete-fortune-button");
const options = document.querySelectorAll("option");

const baseURL = "http://localhost:4000";

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/").then((res) => {
        const data = res.data;
        alert(data);
    });
};

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

const postFortune = (req, res) => {
    axios
        .post(`${baseURL}/api/fortune`, {
            fortune: "You will find happiness with a new love.",
        })
        .then((res) => {
            const data = res.data;
            alert(data);
        })
        .catch(() => {
            console.log("Error");
        });
};

const pageInit = () => {
    axios.get(`${baseURL}/`).then((res) => {
        const data = res.data;
        data.forEach((fortune) => {
            let i=0;
            console.log('fortune:', fortune);
            
            const option = document.createElement("option");
            option.innerHTML = fortune;
            option.value = fortune[i];
            deleteFortuneDropdown.appendChild(option);
            i++;
        });
    });
};

const deleteFortune = () => {
    axios
        .delete(`${baseURL}/api/fortune`, {
            data: { fortune: deleteFortune.value },
        })
        .then((res) => {
            const data = res.data;
            alert(data);
        })
        .catch(() => {
            console.log("Error");
        });
}
pageInit();


addfortuneBtn.addEventListener("click", postFortune);
fortuneBtn.addEventListener("click", getFortune);
// complimentBtn.addEventListener("click", getCompliment);
