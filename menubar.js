const hamburger = document.querySelector(".hamburger");
const links = document.querySelector(".links");

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY >= 55);
});

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        links.classList.remove("active");
    })
})

