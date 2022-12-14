import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

function makeGalleryMarkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </div>`;
    })
    .join('');
}

refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryMarkup(galleryItems));

let gallery = new SimpleLightbox('.gallery a');

gallery.on('show.simplelightbox', function () {
  gallery.options.captionDelay = 250;
  gallery.options.captionsData = 'alt';
});
