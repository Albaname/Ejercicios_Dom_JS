//3.1 Basandote en el array siguiente crea una lista ul > li dinamicamente en el html que imprima cada uno de los paises

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');

countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});

document.body.appendChild(ul);

//3.2 Elimina el elemento que tenga la clase .fn-remove-me

const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
  elementToRemove.remove();
}

//3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printhere"

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corolla'];
const divToPrint= document.querySelector('[data-function="printhere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

divToPrint.appendChild(ulCars);

//3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen

const countriesWithImages = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'},
];

countriesWithImages.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    const img = document.createElement('img');
    
    img.src = country.imgUrl;
    img.alt = country.title;
    
    div.appendChild(h4);
    div.appendChild(img);
    
    document.body.appendChild(div);
    });

//3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs

const deleteLastDivButton = document.createElement('button');
deleteLastDivButton.textContent = 'Eliminar último div';
deleteLastDivButton.addEventListener('click', () => {
    const allDivs = document.querySelectorAll('div');
    if (allDivs.length > 0) {
        allDivs[allDivs.length - 1].remove();
    }
    });

    document.body.appendChild(deleteLastDivButton);

//3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html

const allDivs = document.querySelectorAll('div');

allDivs.forEach(div => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar este div';
    deleteButton.addEventListener('click', () => {
        div.remove();
        });
        
        div.appendChild(deleteButton);
        });