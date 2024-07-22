//To print the input 
const urlInput = document.getElementById('input');
const resultDiv = document.getElementById('result');
urlInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        updateLink();
    }
});

function updateLink() {
    const userInput = urlInput.value;
    const generatedLink = document.getElementById('generatedLink');
    generatedLink.href = userInput;
    generatedLink.textContent = userInput;
    resultDiv.textContent = `Generated Link: ${userInput}`;
}
//To open the input in new Tab group
function openWebsite() {
    const userInput = document.getElementById('input').value;
    window.open(userInput, '_blank');
}

