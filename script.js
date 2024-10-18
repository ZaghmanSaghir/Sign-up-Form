const container = document.querySelector('.container')
const signUpBtn = document.getElementById('btn')

signUpBtn.addEventListener('click', () => {
    // toggle -> add the class to the container if container does not have
    // toggle -> remove the class from container if it has
    container.classList.toggle("change")
})