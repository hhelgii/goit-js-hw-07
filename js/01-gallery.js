import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(item => {
    return `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a></li>`;
  })
  .join('');
// console.log(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', event => {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();
  gallery.addEventListener('keydown', event => {
    if (event.code === 'Escape') instance.close();
  });
  gallery.removeEventListener('keydown', event => {
    if (event.code === 'Escape') instance.close();
  })
});
