const SHOWING = 'showing';
const NOW = 'now';
const Inner= document.querySelector('#inner');
const Lis = document.querySelectorAll("#vertical_slider a span");

function handleWheel(event){
    const current = document.querySelector('.'+SHOWING);
    const buttonCurrent = document.querySelector('.'+NOW).parentElement;
    const nextButton = buttonCurrent.nextElementSibling;
    const previousButton = buttonCurrent.previousElementSibling;
    const BACK1 = document.querySelector('.back1');
    const BACK2 = document.querySelector('.back2');
    const BACK3 = document.querySelector('.back3');
    const BACK4 = document.querySelector('.back4');
    const BACK5 = document.querySelector('.back5');
    const FOOT = document.querySelector('.foot');
    
    if (event.wheelDelta === -150){
        if (current.classList.contains('back1')){
            Inner.style.marginTop = '-100vh';
            current.classList.remove(SHOWING);
            BACK2.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            nextButton.firstElementChild.classList.add(NOW);

        } else if(current.classList.contains('back2')){
            Inner.style.marginTop = '-200vh';
            current.classList.remove(SHOWING);
            BACK3.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            nextButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back3')){
            Inner.style.marginTop = '-300vh';
            current.classList.remove(SHOWING);
            BACK4.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            nextButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back4')){
            Inner.style.marginTop = '-400vh';
            current.classList.remove(SHOWING);
            BACK5.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            nextButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back5')){
            Inner.style.marginTop = 'calc(-400vh - 200px)';
            current.classList.remove(SHOWING);
            FOOT.classList.add(SHOWING);
        };
        
        
        
    } else{
        if (current.classList.contains('back2')){
            Inner.style.marginTop = '0';
            current.classList.remove(SHOWING);
            BACK1.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            previousButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back3')){
            Inner.style.marginTop = '-100vh';
            current.classList.remove(SHOWING);
            BACK2.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            previousButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back4')){
            Inner.style.marginTop = '-200vh';
            current.classList.remove(SHOWING);
            BACK3.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            previousButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('back5')){
            Inner.style.marginTop = '-300vh';
            current.classList.remove(SHOWING);
            BACK4.classList.add(SHOWING);
            buttonCurrent.firstElementChild.classList.remove(NOW);
            previousButton.firstElementChild.classList.add(NOW);
        } else if(current.classList.contains('foot')){
            Inner.style.marginTop = '-400vh';
            current.classList.remove(SHOWING);
            BACK5.classList.add(SHOWING);
        };
        
    };
}


function init(){
    Inner.addEventListener('wheel', handleWheel);
}
init();
