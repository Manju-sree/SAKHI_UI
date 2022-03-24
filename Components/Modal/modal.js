const modalCTA = document.querySelector("#demo-modal-CTA");
const modalContainer= document.querySelector("#demo-modal-demo-container");
const modalCancelBtn = document.querySelector("#demo-modal-cancel");

modalCTA.addEventListener("click", ()=>{
    modalContainer.classList.add("active");
    document.body.style.overflow = "hidden"
})

modalCancelBtn.addEventListener("click", ()=>{
    modalContainer.classList.remove("active");
    document.body.style.overflow = "visible";
})
