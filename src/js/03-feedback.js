import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit (evt) {
evt.preventDefault();
console.log(evt)
if (!evt.target.email.value || !evt.target.message.value) {
    alert('Enter all data');
    return;
  }
}


function onFormInput (e) {

    console.log(e.target.name);
    console.log(e.target.value);
}