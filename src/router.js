window.addEventListener('load', handleButton)

function handleButton() {
    let standardButton = document.querySelector(
        '#container #standard #bt-standard'
    )
    let essentialsButton = document.querySelector(
        '#container #essentials #bt-essentials'
    )
    let premiumButton = document.querySelector('#container #premium #bt-premium')

    let buttonsElements = []
    buttonsElements.push(standardButton, essentialsButton, premiumButton)

    buttonsElements.map(element => {
        handleRouter(element)
    })
}

function handleRouter(element) {
    element.addEventListener('click', () => {
        window.location.assign('../view/checkout.html')
        localStorage.planType = element.value
    })
}