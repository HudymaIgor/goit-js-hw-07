import { galleryItems } from './gallery-items.js';
// Change code below this line
const galarisEl = document.querySelector('.gallery');
const onGalari = ({ preview, original, description } = {}) => {

    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`

};
const galarisСards = galleryItems.map((el) => {
   return  onGalari(el)
});

// galarisEl.addEventListener('click', (event) => {

//   instance.show()
// })

galarisEl.insertAdjacentHTML("afterbegin", galarisСards.join(''));
console.log(galleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});