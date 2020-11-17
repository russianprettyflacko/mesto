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

// Изображения
const imgValue = document.querySelector('#card-add__img');
const popupImage = document.querySelector('#popup-image');
const popupImageWindow = document.querySelector('#popup-image .popup-image');
const popupImageTitle = document.querySelector('#popup-image .popup-image__title');
const btnImageClose = document.querySelector('#popup-image .popup-image__close');
const imageInPopup = popupImageWindow.querySelector('.popup-image__image');

// Карточки
const popupCardAdd = document.querySelector('#card-add');
const popupCardAddWindow = document.querySelector('#card-add .popup');
const formCardAdd = document.querySelector('.card-add');
const btnCardAdd = document.querySelector('.profile__add-button');
const btnCardAddClose = document.querySelector('#card-add .popup__close');
const elements = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;
const cards = document.querySelector('.elements');
const titleValue = document.querySelector('#card-add__title');
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

// Отправить форму - Редактирование профиля
function formProfileSubmit(event) {
  event.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  wrapperClose(popupProfileEdit);
}

formProfileEdit.addEventListener('submit', formProfileSubmit);

// Отправить форму - Добавление карточки
function cardAddSubmit(event) {
  event.preventDefault();
  let item = new Array;
  item.name = titleValue.value;
  item.link = imgValue.value;
  cardCreate(item);
  closeCardAdd();
}

formCardAdd.addEventListener('submit', cardAddSubmit);

// Открыть попап - Изображение
function imageOpen(src, title) {
  imageInPopup.alt = title;
  imageInPopup.src = src;
  popupImageTitle.textContent = title;
  popupImageWindow.prepend(imageInPopup);
  wrapperOpen(popupImage);
}

// Открыть попап - Редактирование профиля
function openProfilEdit() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  wrapperOpen(popupProfileEdit);
}

btnProfileEdit.addEventListener('click', openProfilEdit);

// Закрыть попап - Добавление карточки
function closeCardAdd() {
  titleValue.value = '';
  imgValue.value = '';
  wrapperClose(popupCardAdd);
}

btnCardAddClose.addEventListener('click', closeCardAdd);

// Закрыть попап
function wrapperClose(popup) {
  popup.classList.remove('popup-wrapper_active');
}

popupCardAdd.addEventListener('click', function (event) {
  if (!popupCardAddWindow.contains(event.target) && popupCardAdd.classList.contains('popup-wrapper_active')) {
    closeCardAdd();
  }
});

popupProfileEdit.addEventListener('click', function (event) {
  if (!popupProfileEditWindow.contains(event.target) && popupProfileEdit.classList.contains('popup-wrapper_active')) {
    wrapperClose(popupProfileEdit);
  }
});

popupImage.addEventListener('click', function (event) {
  if (!popupImageWindow.contains(event.target) && popupImage.classList.contains('popup-wrapper_active')) {
    wrapperClose(popupImage);
  }
});

btnImageClose.addEventListener('click', function () {
  wrapperClose(popupImage);
});

btnProfileEditClose.addEventListener('click', function () {
  wrapperClose(popupProfileEdit);
});

// Открыть попап
function wrapperOpen(popup) {
  popup.classList.add('popup-wrapper_active');
}

btnCardAdd.addEventListener('click', function () {
  wrapperOpen(popupCardAdd);
});

// Добавить карточку
function cardAdd(card) {
  cards.prepend(card);
}

// Создать карточку
function cardCreate(item) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector('.element__title');
  const cardCover = card.querySelector('.element__cover');
  const cardLike = card.querySelector('.element__like');
  const cardDelete = card.querySelector('.element__delete');

  cardCover.addEventListener('click', function (event) {
    let src = event.target.src;
    let title = event.target.parentElement.querySelector('.element__title').textContent;
    imageOpen(src, title);
  });

  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  });

  cardDelete.addEventListener('click', function (event) {
    event.target.parentElement.remove();
  });

  cardTitle.textContent = item.name;
  cardCover.alt = item.name;
  cardCover.src = item.link;
  cardAdd(card);
}

initialCards.forEach(function (item) {
  cardCreate(item);
});