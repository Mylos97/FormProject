document.addEventListener('DOMContentLoaded', () => {
    console.log("script has been loaded");
    const submitButton = findSubmitButton();
    submitButton.addEventListener('click', getFormInfo)
});

const findSubmitButton = () => {
    const submitButton = document.querySelector('button[type="submit"]');
    return submitButton;
}

const getFormInfo = () => {
    console.log("hello from the interwebs");
}