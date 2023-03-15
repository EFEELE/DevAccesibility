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

function convertToImage() {
    // Select the element to be converted to an image
    const element = document.getElementById("output");

    // Convert the element to an image using html2canvas
    html2canvas(element).then(function(canvas) {
        // Create a temporary link to download the image
        const link = document.createElement("a");
        link.download = "textoenbraile.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
