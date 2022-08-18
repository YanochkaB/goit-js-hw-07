import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery') //доступ до div у якому буде галерея
const galleryList = createGaleryList(galleryItems) //створення нових div для картинок з доп. функції
gallery.insertAdjacentHTML('beforeend', galleryList) // додавання новостворених об'єктів 

function createGaleryList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
        <a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}"
            alt="${description}" />
        </a>
        </div>`;
        })
        .join('')
}

const galleryLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});