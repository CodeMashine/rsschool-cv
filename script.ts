const projectImg = document.querySelector(".item-image>img") ;


function zoomIn(event:Event|null){
    const img = event?.target ;
    img?.classList.toggle("zoom-in") ;
} ;

projectImg?.addEventListener("click" , (event:Event)=>zoomIn(event))