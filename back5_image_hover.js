const backImg = document.querySelectorAll(".img_back");
const imgMouseOver = 'img_mouseover';

function handleMouseOver(event){
    console.log(1);
    const Img = event.target.firstElementChild;    
    Img.classList.add("img_mouseover");
    console.log(Img);
}

function handleMouseLeave(event){
    console.log(2);
    const Img = event.target.firstElementChild;
    Img.classList.remove("img_mouseover");
        console.log(Img);
}


function init(){
    for(let i = 0; i < backImg.length ; i++){
        backImg[i].addEventListener('mouseover', handleMouseOver);
        backImg[i].addEventListener('mouseleave', handleMouseLeave);
    }
    
}


init();