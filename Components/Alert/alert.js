const alertExampleBox = document.querySelector("#alert-example-close");
const alertExampleCloseBtn = document.querySelector("#alert-example-close-btn");

alertExampleCloseBtn.addEventListener("click", () => {
    alertExampleBox.style.display = "none";
})