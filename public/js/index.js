
  var agent = navigator.userAgent.toLowerCase();
  if( agent.indexOf("edge") != -1) window.location = "../html/ie.banner.html";
  if( agent.indexOf('Trident')>-1 ) window.location = "../html/ie.banner.html";



/******************************* 글로벌 설정 ********************************/
// let deactivated = document.querySelectorAll(".deactivated");
let modalBtn = document.querySelector(".modal__btn");
let modal = document.querySelector(".modal");
let modalBox = document.querySelector(".modal__inner");
let modalDesc = document.querySelector(".modal__desc");
let mobileBtn = document.querySelector(".date__mobile");
let mobileNav = document.querySelector(".date__links")
var video = document.querySelectorAll('.video__file');
[].forEach.call(video, function(e){ 
  e.onplaying = function videoPlay(){
    let artistName = this.parentNode.id;
    sendName(artistName);
    console.log(artistName); 
      openText(video, e);}
  e.onpause = function videoStop(){
    let artistName = this.parentNode.id;
    sendName(artistName);
    console.log(artistName); 
      closeText(video, e);}
        
  });
function openText(video, e){

     getElementIndex(video, e);
     console.log(getElementIndex(video, e));
     let text = document.querySelectorAll(".text__desc");
     text[getElementIndex(video, e)].classList.add('active');   
}  
function closeText(video, e){

     getElementIndex(video, e);
     console.log(getElementIndex(video, e));
     let text = document.querySelectorAll(".text__desc");
     text[getElementIndex(video, e)].classList.remove('active');   
}  

  function getElementIndex(e, range) { //getElementIndex를 실행: 
    if (!!range) return [].indexOf.call(e, range);//range는 배열의 처음부터 끝까지 반환
    return [].indexOf.call(e.parentNode.children, e);// 이벤트가 적용된 요소의 부모의 자식을 찾는다.
 
  }
/******************************* 사용자 함수 *******************************/
/******************************* 이벤트 등록 ******************************/
// deactivated[0].addEventListener('click',openModal);
// deactivated[1].addEventListener('click',openModal);

// modal.addEventListener('click',closeModal)
// modalBtn.addEventListener('click',closeModal)
mobileBtn.addEventListener('mouseover', openMobile);
mobileBtn.addEventListener('mouseleave', closeMobile);

/******************************* 이벤트 콜백 *****************************/
function sendName(artistName){
  let currentArtist =document.querySelector('.artist__name'+'.'+artistName);
  currentArtist.children[0].classList.toggle('artist__activated--mark');
}
function openMobile(e){
      mobileNav.style.display = "flex";
}
function closeMobile(e){
      mobileNav.style.display = "";
}
// function openModal(e){

//     modal.style.display="flex";
//     modalDesc.innerHTML = "2022년 3월 6일 이후에 기록됩니다."
//    }
  

//    function closeModal(e){
//     modal.style.display="none";
// }
//    modalBox.addEventListener('click',function(e) {
//   e.stopPropagation()
// } )




