const hamburger = document.querySelector(".hamburger")
const sidebar = document.querySelector(".side-bar") 

hamburger.addEventListener("click", function()
{
     sidebar.classList.toggle("active")
});

document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});