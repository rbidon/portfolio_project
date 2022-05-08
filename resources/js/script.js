console.log("Working!");
// menu burger 
const toggleButton = document.getElementById("toggleButton");
const navLink = document.getElementById("navLink");
toggleButton.addEventListener("click", () => {
    navLink.classList.toggle('active');
});

// Project Section: tab
// const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const tabsButtonWrapper = document.querySelector('.buttonWrapper')
const contents = document.querySelectorAll(".content");
const contentWrapper = document.querySelector('.contentWrapper');
const flexContainer = document.querySelectorAll('.flexbox-item');
// const frontendcontent = document.querySelectorAll('.flexbox-item');
// console.log(tabButton);- Working
// console.log(contents);
// console.log(tabsButtonWrapper);

tabsButtonWrapper.addEventListener('click', function(e) {
  // clicked variable assigned to the buttons tabs
  const clicked = e.target;
  console.log(clicked);
  if(!clicked)
    return false;
  // remove active in button
  tabButton.forEach(tab => tab.classList.remove('active'))
  // remove active in contents of tab
  contents.forEach(content => content.classList.remove('active'));
  // add active in button
  clicked.classList.add('active');
  const element = document.getElementById(clicked.dataset.id);
  element.classList.add("active");
});

// Scroll Up button will show when scrolling 

const btnScrollToUp = document.querySelector("#btnScrollToUp");
// console.log(btnScrollToUp);

document.addEventListener("scroll", scrollFunction);

// Condition Statement
function scrollFunction() {
  if(window.pageXOffset > 300){
    // show button
    btnScrollToUp.style.display = "block";
  }
  else{ //Hide button
    btnScrollToUp.style.display = "none";
  }
};
// window.addEventListener("scroll", function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     btnScrollToTop.style.display = "block";
//   } else {
//     btnScrollToTop.style.display = "none";
//   }
// });

// // When the user clicks on the button, scroll to the top of the document
// btnScrollToTop.addEventListener("click", () => {
//   window.scroll({
//     top:0 ,
//     left:0,
//     behavior: "smooth"
//   })
// });