    import { galleryItems } from './gallery-items.js';
// Change code below this line

const galarisEl = document.querySelector( '.gallery' );

const onGalari = ({ preview, original, description } = {}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
const galarisСards = galleryItems.map((el) => {
   return  onGalari(el)
});

galarisEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return
  }
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src='${event.target.dataset.source}'/>
    </div>
`)
  const onEscep =  event => {
    if (event.code === 'Escape') {
      instance.close();
      
    }
    window.removeEventListener('keydown', onEscep);
    // console.log();
  }
  
  window.addEventListener('keydown', onEscep);
  
  instance.show()
})

galarisEl.insertAdjacentHTML("afterbegin", galarisСards.join(''));