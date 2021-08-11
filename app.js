// set initial count
let count = 0;

// select value and buttons
let value = document.getElementById("value");
let btnDecrease = document.getElementById("decrease");
let btnReset = document.getElementById("reset");
let btnIncrease = document.getElementById("increase");



btnDecrease.addEventListener("click", function() {
    count--;
    value.innerHTML = count;
    countNumber();
});

btnReset.addEventListener("click", function() {
    count = 0;
    value.innerHTML = count;
    countNumber();
});

btnIncrease.addEventListener("click", function() {
    count++;
    value.innerHTML = count;
    countNumber();
});

function countNumber() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
};
