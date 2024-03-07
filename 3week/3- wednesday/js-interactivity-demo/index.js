console.log("Hello, World.");
let count = 0;
const h1Counter = document.querySelector("#counter");
increase = () => {
    count++;
    h1Counter.textContent = count;
};

decrease = () => {
    if (count > 0) {
        count--;
        h1Counter.textContent = count;
    } else {
        alert('0 is as low as it goes')
    }

    
};
reset = () => {
    h1Counter.textContent = 0;
};
const minusButton = document.querySelector("#minus-btn");
const plusButton = document.querySelector("#plus-btn");
const resetButton = document.querySelector("#reset-btn");

minusButton.addEventListener("click", decrease);
plusButton.addEventListener("click", increase);
resetButton.addEventListener("click", reset);






