import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const createButton = document.querySelector('#submit-button');
const delayInput = document.querySelector('input[name="delay"]');

createButton.addEventListener('click', createNotification);

function createNotification(e) {
  e.preventDefault();
  let stateInput = document.querySelector('input[name="state"]:checked');
  if (delayInput.value && stateInput.value) {
    console.log('delayInput and stateInput are true!');
    return alert('ok');
  }
  return iziToast.warning({
    title: 'Warning',
    message: 'You forgot important data',
    position: 'topRight',
  });
}
