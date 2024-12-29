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
    let validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validRegex.test(emailValue)) {
      emailSpan.textContent = emailValue
      form.classList.remove('error')
      contWrap.classList.add('active')
    } else {
      errorDisplay.textContent = "Valid email required"
      form.classList.add('error')
      // alert('Invalid Email Format!') 
    }
    
  } else {
    errorDisplay.textContent = "You need to fill in your email address!"
    form.classList.add('error')
    // alert('You need to fill in your email address')
  }
  
}

function dismiss() {
  contWrap.classList.remove('active')
  email.value = ""
}

form.addEventListener('submit', submitForm)
dismissBtn.addEventListener('click', dismiss)