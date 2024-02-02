export function openModal(popup) {
<<<<<<< HEAD
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', closeModalbyEsc);
}

export function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', closeModalbyEsc);
}

function closeModalbyEsc(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_is-opened');
    closeModal(popup);
  }
}
=======
    popup.classList.add('popup_is-opened');
   
    document.addEventListener('keyup', closeModalbyEsc);
}


export function closeModal(popup){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', closeModalbyEsc);
}

 
function closeModalbyEsc(event){
    if(event.key === "Escape"){
        const popup = document.querySelector('.popup_is-opened');
        if(popup !== null){
            closeModal(popup);
        }
    }
}
>>>>>>> fc547fb77c5b120641b73da97bf9e27b1484a261
