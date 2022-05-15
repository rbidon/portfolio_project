console.log("Working!");
// =================================== NAVBAR ANIMATION =========================================
// menu burger 
const toggleButton = document.getElementById("toggleButton");
const navLink = document.getElementById("navLink");
toggleButton.addEventListener("click", () => {
    navLink.classList.toggle('active');
    
});

// =========================== Project Section: tab =====================//
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



