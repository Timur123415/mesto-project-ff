import './index.css';
<<<<<<< HEAD
//import {initialCards} from  '../components/cards.js'
import { createCard, likeCard, deleteCard } from '../components/card.js';
import {
  cardContainer,
  profileEditPopup,
  addCardPopup,
  profileImg,
  profileTitle,
  profileDescription,
  formAddCard,
  formEditProfile,
  popupImage,
  popupImageLink,
  popupImageName,
  formEditAvatar,
  changeAvatarPopup,
} from '../components/constants.js';
import { openModal, closeModal } from '../components/modal.js';
import { enableValidation, clearValidation } from '../components/validation.js';
import {
  getInitialCards,
  getProfileInfo,
  updateProfileInfo,
  addNewCard,
  editAvatar,
} from '../components/api.js';

const popups = [
  {
    openBtn: document.querySelector('.profile__edit-button'),
    popupWnd: profileEditPopup,
    openCallBack: function () {
      formEditProfile.name.value = profileTitle.textContent;
      formEditProfile.description.value = profileDescription.textContent;
    },
  },
  {
    openBtn: document.querySelector('.profile__add-button'),
    popupWnd: addCardPopup,
    openCallBack: function () {
     
    },
  },
  {
    openBtn: document.querySelector('.profile__image'),
    popupWnd: changeAvatarPopup,
    openCallBack: function () {
      
    },
  },
];

const forms = [
  {
    form: formEditProfile,
    popupWnd: profileEditPopup,
    closeCallBack: function (closePopupHandler) {
      const nameInput = formEditProfile.name;
      const jobInput = formEditProfile.description;

      formEditProfile.save.textContent = 'Сохранение...';
      updateProfileInfo(nameInput.value, jobInput.value)
        .then((data) => {
          profileTitle.textContent = nameInput.value;
          profileDescription.textContent = jobInput.value;
          closePopupHandler();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formEditProfile.save.textContent = 'Сохранить';
        });
    },
  },
  {
    form: formAddCard,
    popupWnd: addCardPopup,
    closeCallBack: function (closePopupHandler) {
      const placeName = formAddCard['place-name'].value;
      const link = formAddCard.link.value;
      formAddCard.save.textContent = 'Сохранение...';
      addNewCard(placeName, link)
        .then((card) => {
          const cardInfo = buildCardInfo(card);
          const cardElement = createCard(cardInfo, profileOwner);
          cardContainer.prepend(cardElement);

          formAddCard['place-name'].value = '';
          formAddCard.link.value = '';
          closePopupHandler();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formAddCard.save.textContent = 'Создать';
        });
    },
  },
  {
    form: formEditAvatar,
    popupWnd: changeAvatarPopup,
    closeCallBack: function (closePopupHandler) {
      const link = formEditAvatar.link.value;
      formEditAvatar.save.textContent = 'Сохранение...';
      editAvatar(link)
        .then((card) => {
          profileImg.style.backgroundImage = `url(${card.avatar})`;
          formEditAvatar.link.value = '';
          closePopupHandler();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          formEditAvatar.save.textContent = 'Сохранить';
        });
    },
  },
];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

let profileOwner;

function popupImageClick(event) {
  const img = event.target;

  popupImageLink.src = img.src;
  popupImageLink.alt = img.alt;

  popupImageName.textContent = img.alt;
  openModal(popupImage);
}

function buildCardInfo(card) {
  return {
    card,
    likeCard,
    deleteCard,
    popupImageClick,
  };
=======
import {initialCards} from  '../components/cards.js'
import {createCard, likeCard, deleteCard} from '../components/card.js'
import {cardContainer, profileEditPopup, addCardPopup, profileTitle, profileDescription, formAddCard,
     formEditProfile, popupImage, popupImageLink, popupImageName} from '../components/constants.js'
import {openModal, closeModal} from '../components/modal.js'


const popups = [
    {
        openBtn: document.querySelector('.profile__edit-button'),
        popupWnd: profileEditPopup,
        openCallBack: function(){
            formEditProfile.name.value = profileTitle.textContent;
            formEditProfile.description.value = profileDescription.textContent;
        }
    },
    {
        openBtn: document.querySelector('.profile__add-button'),
        popupWnd: addCardPopup,
        openCallBack: function(){
        }
    },
]


const forms = [
    {
        form: formEditProfile,
        popupWnd: profileEditPopup,
        closeCallBack: function(){
            const nameInput = formEditProfile.name;
            const jobInput = formEditProfile.description;

            profileTitle.textContent = nameInput.value;
            profileDescription.textContent = jobInput.value;
        }
    },
    {
        form: formAddCard,
        popupWnd: addCardPopup,
        closeCallBack: function(){
            const placeName = formAddCard['place-name'].value;
            const link = formAddCard.link.value;
        
            const cardInfo = buildCardInfo(placeName, link);
            const cardElement = createCard(cardInfo);
            cardContainer.prepend(cardElement);

            formAddCard['place-name'].value = '';
            formAddCard.link.value = ''
        }
    }
]


function openImageClick(event){
    const img = event.target;

    popupImageLink.src = img.src;
    popupImageLink.alt = img.alt;
    
    popupImageName.textContent = img.alt;
    openModal(popupImage);
}


function buildCardInfo(name, link){
    return {
        name: name,
        link: link,
        likeCard: likeCard,
        deleteCard: deleteCard,
        openImageClick: openImageClick
    };
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
}


function initalizeCards(cards) {
<<<<<<< HEAD
  cards.forEach((item) => {
    const cardInfo = buildCardInfo(item);
    const cardElement = createCard(cardInfo, profileOwner);
    cardContainer.append(cardElement);
  });
}

function initializeProfile(profileInfo) {
  profileTitle.textContent = profileInfo.name;
  profileDescription.textContent = profileInfo.about;
  profileImg.style.backgroundImage = `url(${profileInfo.avatar})`;
}


function fetchData() {
  const promiseCards = getInitialCards();
  const promiseProfile = getProfileInfo();
  Promise.all([promiseCards, promiseProfile])
    .then(([cards, profile]) => {
      initializeProfile(profile);
      profileOwner = profile;
      initalizeCards(cards);
    })
    .catch((err) => {
      console.log(err);
    });
}

function initPopups(popups) {
  popups.forEach(({ openBtn, popupWnd, openCallBack }) => {
    openBtn.addEventListener('click', (event) => {
      openModal(popupWnd);
      openCallBack();
      clearValidation(popupWnd, validationConfig);
    });
  });

  const allPopups = document.querySelectorAll('.popup');
  allPopups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened')) {
        closeModal(popup);
      }
      if (evt.target.classList.contains('popup__close')) {
        closeModal(popup);
      }
    });
  });
}

function initForms(forms) {
  forms.forEach(({ form, popupWnd, closeCallBack }) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      closeCallBack(() => closeModal(popupWnd));
    });
  });
}

fetchData();
initPopups(popups);
initForms(forms);
enableValidation(validationConfig);
=======

    cards.forEach(item => {
        const cardInfo = buildCardInfo(item.name, item.link);
        const cardElement = createCard(cardInfo);
        cardContainer.append(cardElement);
    });
}


function initPopups(popups){
    popups.forEach(({openBtn, popupWnd, openCallBack}) => {
        openBtn.addEventListener('click', event => {
            openModal(popupWnd);
            openCallBack();
        });
    });

    const allPopups = document.querySelectorAll('.popup');
    allPopups.forEach((popup) => {
        popup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_is-opened')) {
                closeModal(popup);
            }
            if (evt.target.classList.contains('popup__close')) {
                closeModal(popup);
            }
        })
    })
}


function initForms(forms){
    forms.forEach(({form, popupWnd, closeCallBack}) => {
        form.addEventListener("submit", (evt) => {
          evt.preventDefault();
          closeModal(popupWnd);
          closeCallBack();
        });
    });
}

initalizeCards(initialCards);
initPopups(popups);
initForms(forms);
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
