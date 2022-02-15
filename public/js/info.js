


/******************************* 글로벌 설정 ********************************/

let mobileBtn = document.querySelector(".article__mobile");
let mobileNav = document.querySelector(".article__links")

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
