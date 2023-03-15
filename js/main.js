// read the value of the input text and display this value in another element
const input = document.getElementById("input-text");
const output = document.getElementById("output");

input.addEventListener("input", (event) => {
    output.innerText = event.target.value;
});

// block the enter key to avoid reloading the page
input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        return false;
    }
});