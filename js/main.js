//defined elements
const green = document.querySelector('#grn')
const red = document.querySelector('#red')
const blue = document.querySelector('#blu')
const yellow = document.querySelector('#ylw')
let level = 1

//functions
const onSpaceClicked = function (event) {
    console.log('clicked!')
}
const onGreenClicked = function (event) {
    function resolveAfter1Seconds() {
        return new Promise(function (resolve) {
          setTimeout(function() {
            resolve(green.classList.remove('green-space-pressed'));
          }, 1000);
        });
      }
      
      async function asyncCall() {
        green.classList.add('green-space-pressed')
        const result = await resolveAfter1Seconds()
      }
    asyncCall()
}

const onRedClicked = function (event) {
    red.classList.add('red-space-pressed')
}
const onBlueClicked = function (event) {
    blue.classList.add('blue-space-pressed')
}
const onYellowClicked = function (event) {
    yellow.classList.add('yellow-space-pressed')
}

//add event listener
document.addEventListener('DOMContentLoaded', function() {
    green.addEventListener('click', onSpaceClicked)
    green.addEventListener('click', onGreenClicked)

    red.addEventListener('click', onSpaceClicked)
    red.addEventListener('click', onRedClicked)

    blue.addEventListener('click', onSpaceClicked)
    blue.addEventListener('click', onBlueClicked)
    
    yellow.addEventListener('click', onSpaceClicked)
    yellow.addEventListener('click', onYellowClicked)
})

//start button
//plays pattern on buttons that you have to match

//level presenter