
var a = document.querySelector("div")

document.querySelector("div").addEventListener('mouseover', bgColor)
document.querySelector("div").addEventListener('mouseout', bgColor2)
document.querySelector("div").addEventListener('click', bgColor3)


function bgColor(){
    document.querySelector("body").style.background = "blue"
}

function bgColor2(){
    document.querySelector("body").style.background = "orange"
}

function bgColor3(){
    document.querySelector("body").style.background = "#FED1AA"

}