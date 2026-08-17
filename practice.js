const practiceForm = document.querySelector('#practice-form');
const practiceInput = document.querySelector('#practice-input');

practiceForm.addEventListener('submit', (event) => {

    // Prevent form submission
    event.preventDefault();

    // Show alert
    alert("Button clicked!");

    // Print input value in console
    console.log(practiceInput.value);
});