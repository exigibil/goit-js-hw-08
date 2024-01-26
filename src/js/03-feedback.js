import throttle from 'lodash.throttle';

const form = document.querySelector('form.feedback-form');
const key = 'feedback-form-state';

const saveFormState = throttle(() => {
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem('key', JSON.stringify(formData));
}, 500);

const loadFormState = () => {
  const storeFormData = localStorage.getItem('key');

  if (storeFormData) {
    const { email, message } = JSON.parse(storeFormData);

    document.querySelector('input[name="email"]').value = email;
    document.querySelector('textarea[name="message"]').value = message;
  }
};

const handleSubmit = e => {
  e.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';

  console.log('Form Submission Data:', { email, message });
};

// Add event listeners
document
  .querySelector('.feedback-form')
  .addEventListener('input', saveFormState);
document
  .querySelector('.feedback-form')
  .addEventListener('submit', handleSubmit);

// Load form state on page load
window.addEventListener('load', loadFormState);
