import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const textEl = document.querySelector('.feedback-form textarea');
const emailEl = document.querySelector('.feedback-form input');
const FEEDBACK = 'feedback-form-state';
let obj = {}

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', throttle(textInput, 500));

textAreaValue()

function onSubmitForm(evt) {
    evt.preventDefault();
    if (emailEl.value === '' || textEl.value === '') {
        alert('Please fill in all the fields!')
        return
    }
    console.log(obj);

    evt.currentTarget.reset();
    localStorage.removeItem(FEEDBACK);
}

function textInput(evt) {
    obj[evt.target.name] = evt.target.value
    localStorage.setItem(FEEDBACK, JSON.stringify(obj)); 
}

function textAreaValue() {
    const saveMessage = localStorage.getItem(FEEDBACK);
    if (saveMessage) {
        obj = JSON.parse(saveMessage);
        if (obj.email) {
            emailEl.value = obj.email
        }
        if (obj.message) {
            textEl.value = obj.message
        }
    }
}