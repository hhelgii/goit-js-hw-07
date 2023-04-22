import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(item => {
    return `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}" /></a></li>`;
  })
  .join('');
// console.log(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);
gallery.addEventListener('click', event => {
  event.preventDefault();
});
const options = { captionsData: 'alt', captionDelay: 250 };
const lightbox = new SimpleLightbox('.gallery__link', options);
