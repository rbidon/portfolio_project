// scroll up for index
const btnScrollToUp = document.querySelector("#btnScrollToUp");
// console.log(btnScrollToUp);

// Scroll Up button will show when scrolling 
document.body.addEventListener("scroll", function() {
  // console.log("Scroll"); ---- Working
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnScrollToUp.style.display = "block";
  } else {
    btnScrollToUp.style.display = "none";
  }
});

// When the user clicks on the button, scroll to the top of the document
btnScrollToUp.addEventListener('click', function() {
  document.body.scrollTo({
    top: 0,
    left: 0, 
    behavior:"smooth"
  });
});