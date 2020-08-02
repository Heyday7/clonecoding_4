const SHOWING = 'showing';
const Inner= document.querySelector('#inner');

function handleWheel(event){
    const current = document.querySelector('.'+SHOWING);
    const BACK1 = document.querySelector('.back1');
    const BACK2 = document.querySelector('.back2');
    const BACK3 = document.querySelector('.back3');
    const BACK4 = document.querySelector('.back4');
    const BACK5 = document.querySelector('.back5');
    if (event.wheelDelta === -150){
        if (current.classList.contains('back1')){
            Inner.style.marginTop = '-500px';
            current.classList.remove(SHOWING);
            BACK2.classList.add(SHOWING);
        } else if(current.classList.contains('back2')){
            Inner.style.marginTop = '-1000px';
            current.classList.remove(SHOWING);
            BACK3.classList.add(SHOWING);
        } else if(current.classList.contains('back3')){
            Inner.style.marginTop = '-1500px';
            current.classList.remove(SHOWING);
            BACK4.classList.add(SHOWING);
        } else if(current.classList.contains('back4')){
            Inner.style.marginTop = '-2000px';
            current.classList.remove(SHOWING);
            BACK5.classList.add(SHOWING);
        };
    } else{
        if (current.classList.contains('back2')){
            Inner.style.marginTop = '0';
            current.classList.remove(SHOWING);
            BACK1.classList.add(SHOWING);
        } else if(current.classList.contains('back3')){
            Inner.style.marginTop = '-500px';
            current.classList.remove(SHOWING);
            BACK2.classList.add(SHOWING);
        } else if(current.classList.contains('back4')){
            Inner.style.marginTop = '-1000px';
            current.classList.remove(SHOWING);
            BACK3.classList.add(SHOWING);
        } else if(current.classList.contains('back5')){
            Inner.style.marginTop = '-1500px';
            current.classList.remove(SHOWING);
            BACK4.classList.add(SHOWING);
        };
        
    };
    console.log(current);
    console.dir(event);
//    console.log('a');
//    console.log(event.);
//    wheelDelta
}


function init(){
    Inner.addEventListener('wheel', handleWheel);
//
//    
//    const BACK1 = document.querySelector('.back1');
//    const BACK2 = document.querySelector('.back2');
//    const BACK3 = document.querySelector('.back3');
//    const BACK4 = document.querySelector('.back4');
//    const BACK5 = document.querySelector('.back5');
//    if (BACK1.classList.contains('showing')){
//        Inner.style.marginTop = '-500px';
//    } else if (BACK2.classList.contains('showing')){
//        Inner.style.marginTop = '-1000px';
//    } else if (BACK3.classList.contains('showing')){
//        Inner.style.marginTop = '-1500px';
//    } else if (BACK4.classList.contains('showing')){
//        Inner.style.marginTop = '-2000px';
//    } else if (BACK5.classList.contains('showing')){
//        Inner.style.marginTop = '-2500px';
//    } ;
}
init();