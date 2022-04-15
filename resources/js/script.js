console.log("testing");
// menu burger 
const toggleButton = document.getElementById("toggleButton");
const navLink = document.getElementById("navLink");
toggleButton.addEventListener("click", () => {
    navLink.classList.toggle('active');
})

// Project Section: tab
const tabs = document.querySelectorAll('[data-tab-target');
tabs.forEach(tab =>{
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        // show target 
        target.classList.add("active");
    })
})