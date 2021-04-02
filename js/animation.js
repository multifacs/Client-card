
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > 30) {
    navbar.classList.add("bg-primary");
    navbar.classList.add("sticky");
    // navbar.classList.remove("navbar-light")
    navbar.classList.remove("py-4");
    // navbar.classList.add("navbar-dark")
    anime({
        targets: 'body',
        backgroundColor: '#FFF',
    });
    
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("bg-primary");
    // navbar.classList.add("navbar-light")
    // navbar.classList.remove("navbar-dark")
    navbar.classList.add("py-4");
  }
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });

  var textWrapper = document.querySelector('.ml2');

  anime({
    targets: '.ml2',
    opacity: [1,0],
    translateY: 50,
    direction: 'reverse',
    easing: "easeInOutQuad",
    duration: 3200,
  });

  anime({
    targets: '.fancybg',
    backgroundColor: '#FFF',
    opacity: ['0%', '100%'],
    easing: 'easeInOutQuad',
    duration: 2250,
  });

 