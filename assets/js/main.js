const header = document.getElementById("header")
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 60)
})

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open")
    this.classList.toggle("bx-x")
})