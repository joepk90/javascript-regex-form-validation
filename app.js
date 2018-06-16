
// Form blur event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {

  const name = document.getElementById('name');
  const regex = /^[a-zA-Z]{2,10}$/;


  if(!regex.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }

}

function validateZip() {

  const name = document.getElementById('zip');
  const regex = /^[0-9]{5}(-[0-9]{4})?$/; // US zip code regex


  if(!regex.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }

}

function validateEmail() {

  const name = document.getElementById('email');
  const regex = /^([a-zA-Z0-9_\-|.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;


  if(!regex.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }

}

function validatePhone() {

  const name = document.getElementById('phone');
  const regex = /^([0-9]{5})[ ]?[0-9]{6}$/; // UK zip code regex
  // const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // US zip code regex


  if(!regex.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }

}
