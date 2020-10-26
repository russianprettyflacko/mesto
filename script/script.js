let popup = document.querySelector('.popup-wrapper');
let popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.profile-edit');

let btnProfileEdit = document.querySelector('.profile-info__edit-button');
let btnPopupClose = document.querySelector('.popup__close');

let nameField = document.querySelector('.profile-info__title');
let jobField = document.querySelector('.profile-info__subtitle');

let nameInput = document.querySelector('#profile-edit__title');
let jobInput = document.querySelector('#profile-edit__subtitle');

function openProfilEdit(){
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;

  popup.classList.add('popup-wrapper_active');
}

function closeProfilEdit(){
  popup.classList.remove('popup-wrapper_active');
}

function formSubmitHandler(event) {
  event.preventDefault();

  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

  closeProfilEdit();
}

popup.addEventListener('click', function(event) {
  if (!popupWindow.contains(event.target) && popup.classList.contains('popup-wrapper_active')){
    closeProfilEdit();
  }
});

formElement.addEventListener('submit', formSubmitHandler);
btnProfileEdit.addEventListener('click', openProfilEdit);
btnPopupClose.addEventListener('click', closeProfilEdit);