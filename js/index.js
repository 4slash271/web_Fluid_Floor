let deactivated = document.querySelectorAll(".deactivated");
let btn = document.querySelector(".modal__btn");
 let modal = document.querySelector(".modal");
 let modalBox = document.querySelector(".modal__inner");
function openModal(e){

 modal.style.display="flex";
}

function closeModal(e){
    modal.style.display="none";
}
deactivated[0].addEventListener('click',openModal);
deactivated[1].addEventListener('click',openModal);
modal.addEventListener('click',closeModal)
btn.addEventListener('click',closeModal)


modalBox.addEventListener('click',function(e) {
	e.stopPropagation()
} )