let popup = document.querySelector('.popup-wrapper');
let formElement = document.querySelector('.profile-edit');

let btnProfileEdit = document.querySelector('.profile-info__edit-button');
let btnPopupClose = document.querySelector('.popup__close');

let nameField = document.querySelector('.profile-info__title');
let jobField = document.querySelector('.profile-info__subtitle');

let nameInput = document.querySelector('#profile-edit__title');
let jobInput = document.querySelector('#profile-edit__subtitle');

btnProfileEdit.addEventListener('click', function() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;

  popup.classList.add('popup-wrapper_active');
});

btnPopupClose.addEventListener('click', function() {
  popup.classList.remove('popup-wrapper_active');
});

popup.addEventListener('click', function(event) {
  if (!document.querySelector('.popup').contains(event.target) && popup.classList.contains('popup-wrapper_active')){
    popup.classList.remove('popup-wrapper_active');
  }
});

function formSubmitHandler(evt) {
  evt.preventDefault();

  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

  popup.classList.remove('popup-wrapper_active');
}

formElement.addEventListener('submit', formSubmitHandler);