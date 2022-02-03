const hide_btn = document.querySelector(".btn-hide-bdg ");
const hide_count = document.querySelector(".hide-bdg");
// span.classList.toggle("count5");
hide_btn.addEventListener("click", () => {
    hide_count.classList.toggle("hide");
});