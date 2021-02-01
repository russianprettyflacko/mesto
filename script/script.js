// Форма - Редактирование профиля
const editProfilePopup = document.querySelector('#popup-profile');
const formProfile = document.querySelector('#form-profile');
const editProfileBtn = document.querySelector('#edit-profile');
const editProfileNameInp = document.querySelector('#profile-name');
const editProfileJobInp = document.querySelector('#profile-job');
const editProfileBtnSubmit = document.querySelector('#profile-submit');

const profileName = document.querySelector('.profile-info__name');
const profileJob = document.querySelector('.profile-info__job');

function editProfileOpen() {
  editProfileNameInp.value = profileName.textContent;
  editProfileJobInp.value = profileJob.textContent;
  popupOpen(editProfilePopup);
}

function editProfileSubmit(event) {
  event.preventDefault();
  profileName.textContent = editProfileNameInp.value;
  profileJob.textContent = editProfileJobInp.value;
  popupClose(editProfilePopup);
}

editProfileBtn.addEventListener('click', editProfileOpen);
formProfile.addEventListener('submit', editProfileSubmit);

// Форма - Добавить элемент
const addElementPopup = document.querySelector('#popup-element');
const formElement = document.querySelector('#form-element');
const addElementBtn = document.querySelector('#add-element');
const addElementTitleInp = document.querySelector('#element-title');
const addElementImageInp = document.querySelector('#element-image');
const addElementBtnSubmit = document.querySelector('#element-submit');

function addElementOpen() {
  addElementTitleInp.value = '';
  addElementImageInp.value = '';
  popupOpen(addElementPopup);
}

function addElementSubmit(event) {
  event.preventDefault();
  let item = new Array;
  item.name = addElementTitleInp.value;
  item.link = addElementImageInp.value;
  addElement(elementCreate(item));
  popupClose(addElementPopup);
}

addElementBtn.addEventListener('click', addElementOpen);
formElement.addEventListener('submit', addElementSubmit);

// Добавить элемент
const elements = document.querySelector('.elements');

function addElement(element) {
  elements.prepend(element);
}

// Создать элемент
const elementTemplate = document.querySelector('#element').content;

function elementCreate(item) {
  const element = elementTemplate.cloneNode(true);
  const elementTitle = element.querySelector('.element__title');
  const elementCover = element.querySelector('.element__cover');
  const elementLike = element.querySelector('.element__like');
  const elementDelete = element.querySelector('.element__delete');

  elementCover.addEventListener('click', function (event) {
    let src = event.target.src;
    let title = event.target.parentElement.querySelector('.element__title').textContent;
    imageOpen(src, title);
  });

  elementLike.addEventListener('click', function (event) {
    event.target.classList.toggle('element__like_active');
  });

  elementDelete.addEventListener('click', function (event) {
    event.target.parentElement.remove();
  });

  if (item.link) {
    elementCover.alt = item.name;
    elementCover.src = item.link;
  }
  elementTitle.textContent = item.name;
  return element;
}

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

initialCards.forEach(function (item) {
  addElement(elementCreate(item));
});

// Открыть изображение
const imagePopup = document.querySelector('#popup-image');
const imagePopupSrc = document.querySelector('.popup-image__image');
const imagePopupTitle = document.querySelector('.popup-image__title');

function imageOpen(src, title) {
  imagePopupSrc.alt = title;
  imagePopupSrc.src = src;
  imagePopupTitle.textContent = title;
  popupOpen(imagePopup);
}

// Открыть/Закрыть попап
function popupOpen(popup) {
  popup.classList.add('popup_show');
  document.addEventListener('keydown', popupKeydownClose);
}

function popupClose(popup) {
  popup.classList.remove('popup_show');
  document.removeEventListener('keydown', popupKeydownClose);
}

function popupKeydownClose(event) {
  if (event.target = 'Escape') {
    const activePopup = document.querySelector('.popup_show');
    popupClose(activePopup);
  }
}

const popupEventListeners = function () {
  const popupList = Array.from(document.querySelectorAll('.popup'));

  popupList.forEach((popup) => {
    let closeBtn = popup.querySelector('.popup__close');

    popup.addEventListener('click', function (event) {
      if (!popup.firstElementChild.contains(event.target) && popup.classList.contains('popup_show')) {
        popupClose(popup);
      }
    });

    closeBtn.addEventListener('click', function () {
      popupClose(popup);
    });
  });
};

popupEventListeners();