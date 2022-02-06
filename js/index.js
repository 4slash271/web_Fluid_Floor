let deactivated = document.querySelectorAll(".deactivated");

let mainText = document.querySelectorAll(".text__desc");
let $video = $(".video__screen");
console.log($video);

let btn = document.querySelector(".modal__btn");
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal__inner");
let modalDesc = document.querySelector(".modal__desc");



// var index = arr3.findIndex(i => i.name == "강호동"); 



function openModal1(e){

 modal.style.display="flex";
 modalDesc.innerHTML = "2022년 3월 1일 이후에 기록됩니다."
}
function openModal2(e){

 modal.style.display="flex";
 modalDesc.innerHTML = "2022년 3월 6일 이후에 기록됩니다."

}

function closeModal(e){
    modal.style.display="none";
}
deactivated[0].addEventListener('click',openModal1);
deactivated[1].addEventListener('click',openModal2);

$video.click(function(){
    console.log($(this).find('.text__desc'));
    $('.text__desc').slideToggle(".active")
});


modal.addEventListener('click',closeModal)
btn.addEventListener('click',closeModal)


modalBox.addEventListener('click',function(e) {
	e.stopPropagation()
} )