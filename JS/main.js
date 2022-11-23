let sliderImages = document.querySelectorAll('.slide');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
let current = 0;

function reset(){
   for(let i=0; i<sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
   }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

function showLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

function showRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
       current = sliderImages.length; 
    }
    showLeft();
});

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
    }
    showRight();
});

startSlide();