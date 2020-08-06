const slider = document.querySelector('#back4_inner');
let isDown = false;
let startX;
let scrollLeft;


function handleMouseDown1(e){
    isDown = true;
    slider.classList.add('active');
    startX = (e.pageX - slider.offsetLeft);
    scrollLeft = slider.scrollLeft;
}
function handleMouseLeave1(e){
    isDown = false;
    slider.classList.remove('active');
}
function handleMouseUp1(e){
    isDown = false;
    slider.classList.remove('active');
}
function handleMouseMove1(e){
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
}


function init(){
    slider.addEventListener('mousedown', handleMouseDown1);
    slider.addEventListener('mouseleave', handleMouseLeave1);
    slider.addEventListener('mouseup', handleMouseUp1);
    slider.addEventListener('mousemove', handleMouseMove1);
    console.log('done');
}


init();