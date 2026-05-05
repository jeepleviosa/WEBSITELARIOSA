const track = document.querySelector('.carousel-track');
let slides = Array.from(document.querySelectorAll('.slide'));

// Clone first and last slides needed
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(document.querySelectorAll('.slide'));

let index = 1;
let slideWidth = slides[index].clientWidth;

// Start at first real slide
track.style.transform = `translateX(-${slideWidth * index}px)`;


// for da NEXT
function nextSlide() {
    if (index >= slides.length - 1) return;

    index++;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
}

// for da PREV
function prevSlide() {
    if (index <= 0) return;

    index--;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
}

//  Loop fix 
track.addEventListener('transitionend', () => {
    // If at cloned first (end it)
    if (slides[index] === firstClone) {
        track.style.transition = "none";
        index = 1;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // If at cloned last (start)
    if (slides[index] === lastClone) {
        track.style.transition = "none";
        index = slides.length - 2;
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
});

//  Fix on resize
window.addEventListener('resize', () => {
    slideWidth = slides[index].clientWidth;
    track.style.transition = "none";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
});