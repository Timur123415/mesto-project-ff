// const { template } = require("@babel/core");

// @todo: Темплейт карточки


// @todo: DOM узлы

// @todo: Функция создания карточки
function createCard(name, link, deleteCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = name;

    const cardImage = cardElement.querySelector('.card__image');
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', name);

    const buttonDelete = cardElement.querySelector('.card__delete-button');
    buttonDelete.addEventListener('click', deleteCard);
  
  return cardElement;
}
// @todo: Функция удаления карточки
function deleteCard(event) {
    event.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу

function initalizeCards(cards) {
    cards.forEach(item => {
        const cardElement = createCard(item.name, item.link, deleteCard);
        cardContainer.appendChild(cardElement);
    });
}

initalizeCards(initialCards);
