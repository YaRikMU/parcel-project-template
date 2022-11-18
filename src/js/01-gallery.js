// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const gallryMarkUp = document.querySelector('.gallery');
const galleryEl = galleryItems
.map(({preview, description, original}) =>
`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
).join('');

gallryMarkUp.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});

console.log(galleryItems);