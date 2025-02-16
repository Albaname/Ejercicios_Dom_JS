//4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', () => {
  console.log(inputFocus.value);
});

//4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input

const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', () => {
  console.log(inputValue.value);
});

//4.3 Añade un evento 'input' que ejecute un console.log con el valor del input

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign in Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

const ulAlbums = document.createElement('ul');

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ulAlbums.appendChild(li);
});

document.body.appendChild(ulAlbums);