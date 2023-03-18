"use strict" ;

const imageList = document.querySelectorAll(".item-image img") ;
const modal = document.querySelector(".modal") ;
const modelInner = document.querySelector(".modal-inner") ;

function zoomHandler (event) {
    // const img = event.target ;
    // if (img.classList.contains("zoomIn")) {
    //     img.classList.toggle("zoomIn") ;
    // }else{
    //     imageList.forEach( el => el.classList.remove("zoomIn")) ;
    //     img.classList.add("zoomIn") ;
    // }
    // console.log("zoom") ;
    // event.target.classList.toggle("zoomIn") ;
    console.log(event.target) ;
    showModal(event.target.src) ;
} ;

imageList.forEach( el => el.addEventListener("click" , (event)=>zoomHandler(event)))


function showModal(img ){
    console.log(modal.classList) ;
    console.log(img) ;
    modelInner.style.background = `center/contain no-repeat url(${img})`
    // if(modal.classList.contains("active")){
    //     modal.style.height = "100%" ;
    //     modal.style.opacity = "0.6" ;
    //     modal.style.zIndex = "999" ;
    // }else{
    //     modal.style.height = "0" ;
    //     modal.style.opacity = "0" ;
    //     modal.style.zIndex = "0" ;
    // }
    modal.classList.toggle("active") ;
}




modal.addEventListener("click" , showModal) ;
