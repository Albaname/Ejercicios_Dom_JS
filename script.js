//1.1 Mostrar por consola el botón con la clase .showme

const botonShowme = document.querySelector(".showme");
console.log(botonShowme);

//1.2 Mostrar por consola el h1 con el id #pillado

const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado);

//1.3 Mostrar por consola todos los p

const todosLosP = document.querySelectorAll("p");
console.log(todosLosP);

//1.4 Mostrar por consola todos los elemnetos con la clase.pokemon

const pokemon = document.querySelectorAll(".pokemon");
console.log(pokemon);

//1.5 Mostrar por consola todos los elementos con el atributo data-function="testMe"

const elementosDataFunction = document.querySelectorAll(
  '[data-function="testMe"]'
);
console.log(elementosDataFunction);

//1.6 Mostrar por consola el tercer personaje con el atributo data-function="testMe"

const tercerPersonaje = document.querySelector(
  '[data-function="testMe"]:nth-child(3)'
);
console.log(tercerPersonaje);
