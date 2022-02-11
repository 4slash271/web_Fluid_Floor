


/******************************* 글로벌 설정 ********************************/
let deactivated = document.querySelectorAll(".deactivated");
let btn = document.querySelector(".modal__btn");
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal__inner");
let modalDesc = document.querySelector(".modal__desc");

/******************************* 사용자 함수 *******************************/
/******************************* 이벤트 등록 ******************************/
deactivated[0].addEventListener('click',openModal1);
deactivated[1].addEventListener('click',openModal2);
deactivated[2].addEventListener('click',openModal1);
deactivated[3].addEventListener('click',openModal2);
modal.addEventListener('click',closeModal)
btn.addEventListener('click',closeModal)
/******************************* 이벤트 콜백 *****************************/
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
   modalBox.addEventListener('click',function(e) {
  e.stopPropagation()
} )


var video = document.querySelectorAll('.video__screen');
[].forEach.call(video, function(e){ 
    e.addEventListener("click", 
    function(){
       
        openText(video, e);
    }
        , false); 
  });
function openText(video, e){
     getElementIndex(video, e);
     console.log(getElementIndex(video, e));
     let text = document.querySelectorAll(".text__desc");
     text[getElementIndex(video, e)].classList.toggle('active');    
}  

  function getElementIndex(e, range) { //getElementIndex를 실행: 
    if (!!range) return [].indexOf.call(e, range);//range는 배열의 처음부터 끝까지 반환
    return [].indexOf.call(e.parentNode.children, e);// 이벤트가 적용된 요소의 부모의 자식을 찾는다.
 
  }


