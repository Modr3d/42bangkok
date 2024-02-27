
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("myNavbar");

    window.addEventListener("scroll", function () {
        
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        navbar.style.top = scrollPosition + "px";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelectorAll('.navbar a');

    
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            navbarLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            
            this.classList.add('active');

            
            var targetId = this.getAttribute('href').substring(1);

            
            var targetSection = document.getElementById(targetId);

            
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
  
  var homeLink = document.getElementById("homeLink");

  homeLink.addEventListener("click", function (event) {
    event.preventDefault(); 
    
    window.location.href = homeLink.getAttribute("href");
  });
});



