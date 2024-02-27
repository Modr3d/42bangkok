function changeImage() {
    let image = document.getElementById("chibi");
    image.src = "../pics/chibi2.png";
}
 
function changeImageBack() {
    let image = document.getElementById("chibi");
    image.src = "../pics/chibi1.png";
}

document.getElementById("chibi").addEventListener("mouseover", changeImage);
document.getElementById("chibi").addEventListener("mouseout", changeImageBack);

function PlayMusic() {
    let play=document.getElementById("music");
    play.play();
}

$(document).ready(function(){
    setTimeout(PlayMusic,3000);
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animation');
        }
    });
});

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animation');
        }
    });
});

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animation');
        }
    });
});

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('square-animation');
        }
    });
});

observer.observe(document.querySelector('.contact-location'));
observer2.observe(document.querySelector('.s-ani'));
observer3.observe(document.querySelector('.intro-ani'));
observer4.observe(document.querySelector('.info-ani'));