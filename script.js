const submitButton = document.querySelector('.button-style')
const errorIcon = document.querySelector('.error-icon')
const errorTxt = document.querySelector('.error-txt')
const formOfEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


function checkInput() {
    const input = document.querySelector('.input-box-style').value
    if(input.match(formOfEmail)) {
        errorIcon.classList.remove('visible');
        errorTxt.classList.remove('visible');
    } else {
        errorIcon.classList.add('visible');
        errorTxt.classList.add('visible');
    }
}



submitButton.addEventListener('click' , checkInput)
