const sessionText = document.querySelector('.session-text')
const btnSession = document.querySelector('.session-btn')
const sessionInput = document.querySelector('.session-input')

sessionInput.oninput = () => {
    sessionStorage.setItem('key', sessionInput.value)
    sessionText.innerHTML = sessionStorage.getItem('key');
}

btnSession.addEventListener("click", function () {
    sessionStorage.removeItem('key');
    sessionText.innerHTML = "";
})


const localText = document.querySelector('.local-text')
const btnLocal = document.querySelector('.local-btn')
const localInput = document.querySelector('.local-input')
localInput.oninput = () => {
    localStorage.setItem('key', localInput.value)
    localText.innerHTML = localStorage.getItem('key')
}

btnLocal.addEventListener("click", function () {
    localStorage.removeItem('key');
    localText.innerHTML = "";
})
