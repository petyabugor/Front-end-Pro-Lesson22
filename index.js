const sessionText = document.querySelector('.session-text')
const btnSession = document.querySelector('.session-btn')

sessionStorage.setItem('key', 'sessionStorage');
sessionText.innerHTML = sessionStorage.getItem('key');

btnSession.addEventListener("click", function () {
    sessionStorage.removeItem('key');
    sessionText.innerHTML = "";
})


const localText = document.querySelector('.local-text')
const btnLocal = document.querySelector('.local-btn')


localStorage.setItem('key', 'localStorage')
localText.innerHTML = localStorage.getItem('key')

btnLocal.addEventListener("click", function () {
    localStorage.removeItem('key');
    localText.innerHTML = "";
})
