let min =Number(prompt("Enter min"))
let max =Number(prompt("Enter max"))
let randomNumber= Math.random()*(max-min+1)+min
document.write(Math.floor(randomNumber))
