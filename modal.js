let linkModal = document.querySelector(".user-catalog");
let modal = document.querySelector(".modal-container");
let modalBack = document.querySelector(".modal-container");
let modalClose = document.querySelector(".modal-close-btn");

linkModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-container-show");
})

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove("modal-container-show");
}) 

modalBack.addEventListener("click", function (evt) {
    modal.classList.remove("modal-container-show");
}) 
