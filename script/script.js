// Профиль
let popupProfileEdit = document.querySelector('#profile-edit');
let popupProfileEditWindow = document.querySelector('#profile-edit .popup');
let formProfileEdit = document.querySelector('.profile-edit');
let btnProfileEdit = document.querySelector('.profile-info__edit-button');
let btnProfileEditClose = document.querySelector('#profile-edit .popup__close');
let nameField = document.querySelector('.profile-info__title');
let jobField = document.querySelector('.profile-info__subtitle');
let nameInput = document.querySelector('#profile-edit__name');
let jobInput = document.querySelector('#profile-edit__job');

function openProfilEdit() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popupProfileEdit.classList.add('popup-wrapper_active');
}

function closeProfilEdit() {
  popupProfileEdit.classList.remove('popup-wrapper_active');
}

function formProfileSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closeProfilEdit();
}

popupProfileEdit.addEventListener('click', function (event) {
  if (!popupProfileEditWindow.contains(event.target) && popupProfileEdit.classList.contains('popup-wrapper_active')) {
    closeProfilEdit();
  }
});

formProfileEdit.addEventListener('submit', formProfileSubmit);
btnProfileEdit.addEventListener('click', openProfilEdit);
btnProfileEditClose.addEventListener('click', closeProfilEdit);

// Карточки
let popupCardAdd = document.querySelector('#card-add');
let popupCardAddWindow = document.querySelector('#card-add .popup');
let formCardAdd = document.querySelector('.card-add');
let btnCardAdd = document.querySelector('.profile__add-button');
let btnCardAddClose = document.querySelector('#card-add .popup__close');

function openCardAdd() {
  popupCardAdd.classList.add('popup-wrapper_active');
}

function closeCardAdd() {
  popupCardAdd.classList.remove('popup-wrapper_active');
}

popupCardAdd.addEventListener('click', function (event) {
  if (!popupCardAddWindow.contains(event.target) && popupCardAdd.classList.contains('popup-wrapper_active')) {
    closeCardAdd();
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('element__delete')) {
    event.target.parentElement.remove();
  }
  if (event.target.classList.contains('element__like')) {
    event.target.classList.toggle('element__like_active')
  }
  if (event.target.classList.contains('element__cover')) {
    let src = event.target.src;
    let title = event.target.parentElement.querySelector('.element__title').textContent;
    imageOpen(src, title);
  }
});

btnCardAdd.addEventListener('click', openCardAdd);
btnCardAddClose.addEventListener('click', closeCardAdd);

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

initialCards.forEach(function (item) {
  let card = cardTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__cover').alt = item.name;
  card.querySelector('.element__cover').src = item.link;
  cards.prepend(card);
});

let titleValue = document.querySelector('#card-add__title');
let imgValue = document.querySelector('#card-add__img');

function cardAddSubmit(event) {
  event.preventDefault();

  let card = cardTemplate.cloneNode(true);
  card.querySelector('.element__title').textContent = titleValue.value;
  card.querySelector('.element__cover').alt = titleValue.value;
  card.querySelector('.element__cover').src = imgValue.value;
  titleValue.value = '';
  imgValue.value = '';
  cards.prepend(card);

  closeCardAdd();
}

formCardAdd.addEventListener('submit', cardAddSubmit);

// Изображение (попап)

let popupImage = document.querySelector('#popup-image');
let popupImageWindow = document.querySelector('#popup-image .popup-image');
let popupImageTitle = document.querySelector('#popup-image .popup-image__title');
let btnImageClose = document.querySelector('#popup-image .popup-image__close');

function imageOpen(src, title) {
  let image = new Image;
  popupImageTitle.textContent = title;

  if (popupImageWindow.querySelector('.popup-image__image')) {
    popupImageWindow.querySelector('.popup-image__image').remove();
  }

  image.classList.add('popup-image__image');
  image.alt = title;
  image.src = src;
  popupImageWindow.prepend(image);
  popupImage.classList.add('popup-wrapper_active');
}

function imageClose() {
  popupImage.classList.remove('popup-wrapper_active');
}

popupImage.addEventListener('click', function (event) {
  if (!popupImageWindow.contains(event.target) && popupImage.classList.contains('popup-wrapper_active')) {
    imageClose();
  }
});

btnImageClose.addEventListener('click', imageClose);