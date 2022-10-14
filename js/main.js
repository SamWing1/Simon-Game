//defined elements
const green = document.querySelector('.green-space')
const red = document.querySelector('.red-space')
const blue = document.querySelector('.blue-space')
const yellow = document.querySelector('.yellow-space')
let level = 1

//functions
const onSpaceClicked = function (event) {
    console.log('clicked!')
}

//add event listener
document.addEventListener('DOMContentLoaded', function() {
    green.addEventListener('click', onSpaceClicked)
    red.addEventListener('click', onSpaceClicked)
    blue.addEventListener('click', onSpaceClicked)
    yellow.addEventListener('click', onSpaceClicked)
})

//start button
//plays pattern on buttons that you have to match

//level presenter