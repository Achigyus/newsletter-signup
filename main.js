const form = document.getElementById('form')
const email = document.getElementById('email_address')
const contWrap = document.getElementById('cont_wrap')
let emailSpan = document.getElementById('email_span')
let dismissBtn = document.getElementById('dismiss_btn')
let errorDisplay = document.getElementById('error_display')

function submitForm(e) {
  e.preventDefault()
  
  let emailValue = email.value
  if (emailValue !== '') {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(emailValue)) {
      emailSpan.textContent = emailValue
      contWrap.classList.add('active')
      errorDisplay.classList.remove('active')
    } else {
      errorDisplay.textContent = "Invalid Email Format!"
      errorDisplay.classList.add('active')
      // alert('Invalid Email Format!') 
    }
    
  } else {
    errorDisplay.textContent = "You need to fill in your email address!"
    errorDisplay.classList.add('active')
    // alert('You need to fill in your email address')
  }
  
}

function dismiss() {
  contWrap.classList.remove('active')
  email.value = ""
}

form.addEventListener('submit', submitForm)
dismissBtn.addEventListener('click', dismiss)