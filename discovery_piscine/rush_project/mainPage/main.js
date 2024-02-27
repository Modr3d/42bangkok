
let view = document.getElementById('view');
let man = document.getElementById('man');
let btn1 = document.getElementById('btn1');
  
window.addEventListener('scroll', function()
{
    let value = window.scrollY;
    let w = window.innerWidth;
    if(w > 560){
        view.style.left = value * 0.1 + 'px';
    }
    else if(w > 412){
      if(value < 2000)
      {
        view.style.left = value * 0.1 + 'px';
      }
    }
    else if(w > 280){
      if(value < 1700)
      {
        view.style.left = value * 0.1 + 'px';
      }
    }
    else {
      if(value < 1200)
      {
        view.style.left = value * 0.1 + 'px';
      }
    }
    requestAnimationFrame(() => {
        man.style.transform = "translate(" + Math.random() * 0.2 + "rem, " + Math.random() * 0.2 + "rem)";
    });
    setTimeout(() => {
        man.style.transform = "";
    }, 100);

})

document.addEventListener("scroll", function() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + window.innerHeight >= scrollHeight -100) {
      document.getElementById("btn1").style.display = "block";
      document.getElementById("textS").style.display = "block";
    } else {
      document.getElementById("btn1").style.display = "none";
      document.getElementById("textS").style.display = "none";
    }
});

const button = document.querySelector(".hea");

window.addEventListener("resize", function() {
    console.log(window.innerWidth);
  if (window.innerWidth < 1230) {
    hea.style.display = "none";
  } else {
    hea.style.display = "block";
    hea.style.display = "fixed";
  }
})

function PlayMusic() {
    let play=document.getElementById("music");
    play.play();
}

$(document).ready(function(){
    setTimeout(PlayMusic,3000);
})