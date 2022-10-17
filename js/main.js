//defined elements
const green = document.querySelector('#grn')
const red = document.querySelector('#red')
const blue = document.querySelector('#blu')
const yellow = document.querySelector('#ylw')
const start = document.querySelector('#start')
const choices = ['#grn', '#red', '#blu', '#ylw']
let pattern = []
let level = 1

//functions
const onSpaceClicked = function (event) {
    console.log('clicked!')
}

const onGreenClicked = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
          setTimeout(function() {
            resolve(green.classList.remove('green-space-pressed'))
          }, 1000)
        })
    }
      
      async function asyncCall() {
        green.classList.add('green-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onRedClicked = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(red.classList.remove('red-space-pressed'))
            }, 1000)
        })
    }

    async function asyncCall() {
        red.classList.add('red-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onBlueClicked = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(blue.classList.remove('blue-space-pressed'))
            }, 1000)
        })
    }

    async function asyncCall() {
        blue.classList.add('blue-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onYellowClicked = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(yellow.classList.remove('yellow-space-pressed'))
            }, 1000)
        })
    }

    async function asyncCall() {
        yellow.classList.add('yellow-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onStartClicked = function (event) {
    const pressFunctions = [onGreenClicked, onRedClicked, onBlueClicked, onYellowClicked]
    let randomIndex = Math.floor(Math.random() * choices.length)
    let startResult = choices[randomIndex]
    let pressResult = pressFunctions[randomIndex]
    pressResult()
    console.log(startResult)
    pattern.push(startResult)
    console.log(pattern)
    start.disabled = true
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

    start.addEventListener('click', onStartClicked)
})

//start button

//plays pattern on buttons that you have to match

//level presenter