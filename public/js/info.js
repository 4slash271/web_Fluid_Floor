
  var agent = navigator.userAgent.toLowerCase();
  if( agent.indexOf("edge") != -1) window.location = "../html/ie.banner.html";
  if( agent.indexOf("msie") != -1) window.location = "../html/ie.banner.html";


/******************************* 글로벌 설정 ********************************/

let mobileBtn = document.querySelector(".article__mobile");
let mobileNav = document.querySelector(".article__links")
let body =document.body;  
let loader = document.querySelector(".loader"); 
let loaderImg = document.querySelector(".loader img"); 


/******************************* 사용자 함수 *******************************/
/******************************* 이벤트 등록 ******************************/

mobileBtn.addEventListener('mouseover', openMobile);
mobileBtn.addEventListener('mouseleave', closeMobile);

/******************************* 이벤트 콜백 *****************************/



function openMobile(e){
      mobileNav.style.display = "flex";
}
function closeMobile(e){
      mobileNav.style.display = "";
}
