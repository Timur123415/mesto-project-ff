export function deleteCard(event) {
  event.target.closest('.places__item').remove();
}


export function likeCard(event){
  event.target.classList.toggle('card__like-button_is-active');
}


export function createCard(cardInfo) {  
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardInfo.name;

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.setAttribute('src', cardInfo.link);
  cardImage.setAttribute('alt', cardInfo.name);

  cardImage.addEventListener('click', cardInfo.openImageClick);

  const buttonDelete = cardElement.querySelector('.card__delete-button');
  buttonDelete.addEventListener('click', cardInfo.deleteCard);

  const buttonLike = cardElement.querySelector('.card__like-button');
  buttonLike.addEventListener('click', cardInfo.likeCard);

  return cardElement;
}

