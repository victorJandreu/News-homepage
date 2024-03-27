
const btn = document.querySelector(".menuBtn")
const svg = document.querySelectorAll(".color")
const absoluteDiv = document.getElementById("absolute")
const closeSvg = document.querySelector(".close")
const openDiv = document.querySelectorAll(".open")
const nav = document.getElementById("nav")
const ul = document.getElementById("ul")

let isOpen = false


btn.addEventListener("mouseenter", function(){
    drawSvg("red", svg)

    btn.addEventListener("mouseleave", function(){
       drawSvg("", svg)
})
})

function drawSvg(color, places) {
    for(let i = 0; i < places.length; i++) { 
        places[i].style.fill = color}
}


btn.addEventListener("click", function(){
    if (!isOpen) {
        absoluteDiv.classList.add("absolute")
        closeSvg.style.display = "none"
        for(let i = 0; i < openDiv.length; i++){
            openDiv[i].style.display = "block"
        }
        nav.classList.add("navVertical")
        ul.classList.add("ulVertical")
        isOpen = !isOpen
    }else {
        absoluteDiv.classList.remove("absolute")
        closeSvg.style.display = "block"
        for(let i = 0; i < openDiv.length; i++){
            openDiv[i].style.display = "none"
        }
        nav.classList.remove("navVertical")
        ul.classList.remove("ulVertical")
        isOpen = !isOpen

    }
    
})

