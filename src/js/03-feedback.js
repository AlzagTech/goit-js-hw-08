import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

let formData = {};
const FORM_DATA_KEY = 'feedback-form-state';

if (localStorage.getItem(FORM_DATA_KEY)) {
  const { email, message } = JSON.parse(localStorage.getItem(FORM_DATA_KEY));
  refs.form.email.value = email || '';
  refs.form.message.value = message || '';
}

refs.form.addEventListener('input', throttle(onFormInput, 1000));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!event.currentTarget.email.value) {
    alert('Please enter your email!');
    return;
  }

  console.log(formData);

  formData = {};
  event.currentTarget.reset();
  localStorage.removeItem(FORM_DATA_KEY);
}
