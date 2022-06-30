// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css"

// Change code below this line
const divConteiner = document.querySelector('.gallery');
const cardsMarkup = getElemeentImg(galleryItems);
divConteiner.insertAdjacentHTML('beforeend', cardsMarkup);
divConteiner.addEventListener('click', onClickImages);


function getElemeentImg(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return ` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
             class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
             </a>
        </div> `
    }).join('');
}


const lightbox = new SimpleLightbox('.gallery .gallery__link', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 })

function onClickImages(event) {
    event.preventDefault()   /* <----------- відміна перезавантаження сторінки браузера */
       
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>`
}

console.log(galleryItems);
