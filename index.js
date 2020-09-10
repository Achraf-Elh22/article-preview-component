const shareIcon = document.querySelector('.card__share-icon');
const sharePopup = document.querySelector('.card__share-popup');

shareIcon.addEventListener('mouseenter', openPopup);
shareIcon.addEventListener('mouseleave', closePopup);

function openPopup() {
  sharePopup.classList.add('card__share-popup--open');
  sharePopup.classList.remove('card__share-popup');
  shareIcon.classList.add('icon-hover');
}

function closePopup() {
  sharePopup.classList.remove('card__share-popup--open');
  sharePopup.classList.add('card__share-popup');
  shareIcon.classList.remove('icon-hover');
}
