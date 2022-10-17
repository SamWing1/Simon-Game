//defined elements
const green = document.querySelector('#grn')
const red = document.querySelector('#red')
const blue = document.querySelector('#blu')
const yellow = document.querySelector('#ylw')
const start = document.querySelector('#start')
const choices = ['#grn', '#red', '#blu', '#ylw']
let pattern = []
let playerPress = []
let startResult
let level = 1
green.disabled = true
red.disabled = true
blue.disabled = true
yellow.disabled = true

//functions
const onGreenClicked = function (event) {
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(green.classList.remove('green-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }
      
      async function asyncCall() {
        green.classList.add('green-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push('#grn')

    function checkAnswer() {
        let result
        if (playerPress.join() == pattern.join()) {
            console.log('correct')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                green.classList.remove('green-space-pressed')
            }, 1000)
            start.disabled = false
        } else {
            console.log('you lose')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                green.classList.remove('green-space-pressed')
            }, 1000)
        }
        return result
    }
    checkAnswer()
}

const greenGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
          setTimeout(function() {
            resolve(green.classList.remove('green-space-pressed'))
            green.disabled = false
            red.disabled = false
            blue.disabled = false
            yellow.disabled = false
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
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(red.classList.remove('red-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        red.classList.add('red-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push('#red')

    function checkAnswer() {
        let result
        if (playerPress.join() == pattern.join()) {
            console.log('correct')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                red.classList.remove('red-space-pressed')
            }, 1000)
            start.disabled = false
        } else {
            console.log('you lose')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                red.classList.remove('red-space-pressed')
            }, 1000)
        }
        return result
    }
    checkAnswer()
}

const redGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(red.classList.remove('red-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
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
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(blue.classList.remove('blue-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        blue.classList.add('blue-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push('#blu')

    function checkAnswer() {
        let result
        if (playerPress.join() == pattern.join()) {
            console.log('correct')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                blue.classList.remove('blue-space-pressed')
            }, 1000)
            start.disabled = false
        } else {
            console.log('you lose')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                blue.classList.remove('blue-space-pressed')
            }, 1000)
        }
        return result
    }
    checkAnswer()
}

const blueGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(blue.classList.remove('blue-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
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
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(yellow.classList.remove('yellow-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        yellow.classList.add('yellow-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push('#ylw')

    function checkAnswer() {
        let result
        if (playerPress.join() == pattern.join()) {
            console.log('correct')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                yellow.classList.remove('yellow-space-pressed')
            }, 1000)
            start.disabled = false
        } else {
            console.log('you lose')
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                yellow.classList.remove('yellow-space-pressed')
            }, 1000)
        }
        return result
    }
    checkAnswer()
}

const yellowGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(yellow.classList.remove('yellow-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        yellow.classList.add('yellow-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

//start button
const onStartClicked = function (event) {
    const pressFunctions = [greenGlow, redGlow, blueGlow, yellowGlow]
    let randomIndex = Math.floor(Math.random() * choices.length)
    // randomIndex = 0 //debugging tool
    let startResult = choices[randomIndex]
    pressResult = pressFunctions[randomIndex]
    pressResult()
    console.log(startResult)
    pattern.push(startResult)
    console.log(pattern)
    start.disabled = true
}

//add event listener
document.addEventListener('DOMContentLoaded', function() {
    green.addEventListener('click', onGreenClicked)
    red.addEventListener('click', onRedClicked)
    blue.addEventListener('click', onBlueClicked)    
    yellow.addEventListener('click', onYellowClicked)
    start.addEventListener('click', onStartClicked)
})

//level presenter