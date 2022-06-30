import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textEl = document.querySelector('.feedback-form textarea');
const FEEDBACK = 'feedback-form-state';


formEl.addEventListener('submit', onSubmitForm);
textEl.addEventListener('input', throttle(textInput, 500));

textAreaValue()

function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
}


function textInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(FEEDBACK, message)
}

function textAreaValue() {
    const saveMessage = localStorage.getItem(FEEDBACK);
    if (saveMessage) {
        textEl.value = saveMessage;
    }
}