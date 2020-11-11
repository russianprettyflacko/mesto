// Профиль
const popupProfileEdit = document.querySelector('#profile-edit');
const popupProfileEditWindow = document.querySelector('#profile-edit .popup');
const formProfileEdit = document.querySelector('.profile-edit');
const btnProfileEdit = document.querySelector('.profile-info__edit-button');
const btnProfileEditClose = document.querySelector('#profile-edit .popup__close');
const nameField = document.querySelector('.profile-info__title');
const jobField = document.querySelector('.profile-info__subtitle');
const nameInput = document.querySelector('#profile-edit__name');
const jobInput = document.querySelector('#profile-edit__job');

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
const popupCardAdd = document.querySelector('#card-add');
const popupCardAddWindow = document.querySelector('#card-add .popup');
const formCardAdd = document.querySelector('.card-add');
const btnCardAdd = document.querySelector('.profile__add-button');
const btnCardAddClose = document.querySelector('#card-add .popup__close');



popupCardAdd.addEventListener('click', function (event) {
  if (!popupCardAddWindow.contains(event.target) && popupCardAdd.classList.contains('popup-wrapper_active')) {
    closeCardAdd();
  }
});

const elements = document.querySelector('.elements');
elements.addEventListener('click', function (event) {
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

function cardAdd(item){
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  const cardCover = card.querySelector('.element__cover');

  cardTitle.textContent = item.name;
  cardCover.alt = item.name;
  cardCover.src = item.link;
  cards.prepend(card);
}

initialCards.forEach(function (item) {
  cardAdd(item);
});

const titleValue = document.querySelector('#card-add__title');
const imgValue = document.querySelector('#card-add__img');

function cardAddSubmit(event) {
  event.preventDefault();

  let item = new Array;

  item.name = titleValue.value;
  item.link = imgValue.value;

  cardAdd(item);
  closeCardAdd();
}

formCardAdd.addEventListener('submit', cardAddSubmit);

// Изображение (попап)

const popupImage = document.querySelector('#popup-image');
const popupImageWindow = document.querySelector('#popup-image .popup-image');
const popupImageTitle = document.querySelector('#popup-image .popup-image__title');
const btnImageClose = document.querySelector('#popup-image .popup-image__close');
const imageInPopup = popupImageWindow.querySelector('.popup-image__image');

popupImage.addEventListener('click', function (event) {
  if (!popupImageWindow.contains(event.target) && popupImage.classList.contains('popup-wrapper_active')) {
    imageClose();
  }
});

btnImageClose.addEventListener('click', imageClose);


// Функции открытия/закрытия не совпадают везде, только в одном случае
// последние две функции

function openCardAdd() {
  popupCardAdd.classList.add('popup-wrapper_active');
}

function imageOpen(src, title) {
  imageInPopup.alt = title;
  imageInPopup.src = src;
  popupImageTitle.textContent = title;
  popupImageWindow.prepend(imageInPopup);
  popupImage.classList.add('popup-wrapper_active');
}

function openProfilEdit() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popupProfileEdit.classList.add('popup-wrapper_active');
}

function closeCardAdd() {
  titleValue.value = '';
  imgValue.value = '';
  popupCardAdd.classList.remove('popup-wrapper_active');
}

function imageClose() {
  popupImage.classList.remove('popup-wrapper_active');
}

function closeProfilEdit() {
  popupProfileEdit.classList.remove('popup-wrapper_active');
}