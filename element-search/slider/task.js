let prev = document.getElementsByClassName('slider__arrow_prev');
let next = document.getElementsByClassName('slider__arrow_next');
let slides = document.getElementsByClassName('slider__item');

let current = 0;

next[0].onclick = function() {  

    slides.item(current).classList.remove('slider__item_active');

    (current < slides.length - 1) ? current ++ :  current = 0;

    slides.item(current).classList.add('slider__item_active');

}

prev[0].onclick = function() {  

    slides.item(current).classList.remove('slider__item_active');

    (current <= 0) ? current = slides.length - 1 :  current --;
    
    slides.item(current).classList.add('slider__item_active');
    
}


