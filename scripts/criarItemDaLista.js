import gerarDiaDaSemana from './gerarDiaDaSemana.js';

const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista() {
  if (inputItem.value === "") {
    alert("Por favor, insira o item!");

    return;
  }

  const itemLista = document.createElement("li");

  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");

  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;

  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", () => {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });

  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);
  itemLista.appendChild(containerItemDaLista);

  const dataCompleta = gerarDiaDaSemana();

  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemData.classList.add("texto-data");

  itemLista.appendChild(itemData);
  
  return itemLista;
}
