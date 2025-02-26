let mathPoint=parseFloat(prompt("Enter the math point"))
let physicsPoint=parseFloat(prompt("Enter the physics point"))
let chemistryPoint=parseFloat(prompt("Enter the chemistry point"))
let averagePoint=(mathPoint+physicsPoint+chemistryPoint)/3
document.write(averagePoint.toFixed(2))