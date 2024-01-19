import './index.css';
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


function popupImageClick(event){
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
        popupImageClick: popupImageClick
    };
}


function initalizeCards(cards) {
    cards?.forEach(item => {
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
