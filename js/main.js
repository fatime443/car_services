window.onload = function(){
    const nextBtn = document.getElementById('next')
    const prevBtn = document.getElementById('prev')

    nextBtn.addEventListener('click',function(){
        nextSlide();
    });
    prevBtn.addEventListener('click',function(){
        prevSlide();
    });
};

let slideNumber = 0;
const nextSlide = ()=>{
    const slider = document.getElementById('slider');
    const slides = slider.getElementsByClassName('slides');
    const currentSlide = slider.getElementsByClassName('current');


    currentSlide[0].classList.remove('current');
    if(slideNumber == (slides.length-1)){
        slideNumber = 0;
    }
    else{
        slideNumber+=1;
    }
    slides[slideNumber].classList.add('current')
};
const prevSlide = ()=>{
    const slider = document.getElementById('slider');
    const slides = slider.getElementsByClassName('slides');
    const currentSlide = slider.getElementsByClassName('current');


    currentSlide[0].classList.remove('current');
    if(slideNumber == 0){
        slideNumber = slides.length-1;
    }
    else{
        slideNumber-=1;
    }
    slides[slideNumber].classList.add('current')
};


const accordion = document.getElementsByClassName('contentBx');

for(var i=0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

