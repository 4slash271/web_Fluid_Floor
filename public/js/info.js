


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

window.onbeforeunload = function () { 
    setTimeout(showLoader, 500);
    function showLoader(){
        loader.style.visibility = "visible";
        body.style.overflowY = "hidden";
    }
}  //현재 페이지에서 다른 페이지로 넘어갈 때 표시해주는 기능
window.onload= function(){
    setTimeout(hideLoader, 1000);
    function hideLoader(){
        loader.style.visibility = "hidden";
        body.style.overflowY = "unset";
       
    }   
    
}

function openMobile(e){
      mobileNav.style.display = "flex";
}
function closeMobile(e){
      mobileNav.style.display = "";
}
