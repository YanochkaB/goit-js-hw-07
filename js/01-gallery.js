import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


//Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
//Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
//Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

const gallery = document.querySelector('.gallery')
const galleryList = createGaleryList(galleryItems)

gallery.insertAdjacentHTML('beforeend', galleryList)

function createGaleryList(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src=${preview}
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
        })
    .join("")
}

gallery.addEventListener('click', onClick)

function onClick(evt) {
    evt.preventDefault()

    // "отсебятина" для кліку лише по зображеннях
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const imgSource = evt.target.dataset.source
    const instance = basicLightbox.create(`
        <img
        src="${imgSource}"
        >
    `);
    instance.show();
}

gallery.addEventListener("keydown", onClickEsc);

function onClickEsc(evt) {
    evt.preventDefault()
    const imgSrc = evt.target.src;
    const instance = basicLightbox.create(`
        <img
        src="${imgSrc}"
        >
    `);
    instance.show();
}

// function escPressKey(evt) {
//     console.log(evt.code) // натиснута клавіша
//     if (evt.code === 'Escape') {

//     }
// }