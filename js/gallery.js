const images = [
  {
    id: 1,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    id: 2,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    id: 3,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    id: 4,
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    id: 5,
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    id: 6,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    id: 7,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    id: 8,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    id: 9,
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const container = document.querySelector('.gallery');

// function imageTemplate(image) {
//   return `
//     <li class="item" data-id="${image.id}">
//       <img
//         width="360"
//         src="${image.preview}"
//         alt="${image.description}"
//       />
//     </li>`;
// }

// function imagesTemplate(images) {
//   return images.map(imageTemplate).join('\n');
// }

// function renderTemplate() {
//   const markup = imagesTemplate(images);
//   container.innerHTML = markup;
// }

// renderTemplate();


// function openModal(image) {
//   instance = basicLightbox.create(
//     `
//     <div class="modal">
//         <img src="${image.original}" alt="${image.description}" />
//     </div>
//     `,
//     {
//       onShow: (instance) => {
//         console.log('ADD EVENT LISTENER');
//         window.addEventListener('keydown', handleCloseModal);
//       },
//       onClose: (instance) => {
//         console.log('REMOVE EVENT LISTENER');
//         window.removeEventListener('keydown', handleCloseModal);
//       },
//     }
//   );

//   instance.show();
// }

// function closeModal() {
//   instance.close();
// }

// function handleCloseModal(e) {
//   console.log('test');
//   if (e.code === 'Escape') {
//     closeModal();
//   }
// }

// container.addEventListener('click', e => {
//   if (e.target === e.currentTarget) return;
//   const liElem = e.target.closest('li');
//   const id = liElem.dataset.id;
//   const product = images.find(el => el.id == id);
//   openModal(product);
// });


function imageTemplate(image) {
  return `
    <li class="item">
      <a class="gallery__link" href="${image.original}">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="${image.original}"
          alt="${image.description}"
          width="360"
        />
      </a>
    </li>`;
}

function imagesTemplate(images) {
  return images.map(imageTemplate).join('\n');
}

function renderTemplate() {
  const markup = imagesTemplate(images);
  container.innerHTML = markup;
}

renderTemplate();

let instance = null;

function openModal(imageSrc, imageAlt) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${imageSrc}" alt="${imageAlt}" />
    </div>
    `,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', handleCloseModal);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', handleCloseModal);
      },
    }
  );

  instance.show();
}

function closeModal() {
  if (instance) {
    instance.close();
  }
}

function handleCloseModal(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

container.addEventListener('click', e => {
  e.preventDefault(); // Щоб <a> не перезавантажував сторінку
  if (e.target.nodeName !== 'IMG') return;

  const imgElement = e.target;
  const source = imgElement.dataset.source;
  const alt = imgElement.alt;

  openModal(source, alt);
});