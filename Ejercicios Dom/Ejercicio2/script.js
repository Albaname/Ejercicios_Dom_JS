//2.1 Insertar dinamicamente en un html un div vacio con JavaScript

const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//2.2 Insertar dinamicamente en un html un div que contenga una p con JavaScript

const nuevoDivConP = document.createElement("div");
const nuevoP = document.createElement("p");
nuevoP.textContent = "Párrafo dentro de un div";
nuevoDivConP.appendChild(nuevoP);
document.body.appendChild(nuevoDivConP);

//2.3 Insertar dinamicamente en un html un div que contenga 6 p utilizando un loop con JavaScript

const nuevoDivConSeisP = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const nuevoP = document.createElement("p");
  nuevoP.textContent = `Párrafo ${i + 1}`;
  nuevoDivConSeisP.appendChild(nuevoP);
}
document.body.appendChild(nuevoDivConSeisP);

//2.4 Insertar dinamicamente con JavaScript en un html una p con el texto "Soy dinámico"

const nuevoPdinamico = document.createElement("p");
nuevoPdinamico.textContent = "Soy dinámico";
document.body.appendChild(nuevoPdinamico);

//2.5 Insertar en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'

const h2InsertHere = document.querySelector(".fn-insert-here");
h2InsertHere.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con textos del array

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const nuevaUl = document.createElement("ul");

apps.forEach(app => {
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = app;
  nuevaUl.appendChild(nuevoLi);
});

document.body.appendChild(nuevaUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementosToRemover = document.querySelectorAll(".fn-remove-me");
elementosToRemover.forEach(elemento => {
    elemento.remove();
    });

//2.8 Inserta una p con el texto 'Voy en medio' entre los div

const nuevoPMedio = document.createElement("p");
nuevoPMedio.textContent = "Voy en medio";

const divs = document.querySelectorAll("div");
document.body.insertBefore(nuevoPMedio, divs[1]);

//2.9 Inserta p con el texto 'Voy dentro', dentro de todos los div con la clase .fn-insert-inside

const divsParaInsertar = document.querySelectorAll(".fn-insert-inside");
divsParaInsertar.forEach(div => {
  const nuevoPInterna = document.createElement("p");
  nuevoPInterna.textContent = "Voy dentro";
  div.appendChild(nuevoPInterna);
});