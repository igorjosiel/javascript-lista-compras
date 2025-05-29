import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from './scripts/verificarListaVazia.js';

const listaCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const itemDaLista = criarItemDaLista();
  listaCompras.appendChild(itemDaLista);

  verificarListaVazia(listaCompras);
});

verificarListaVazia(listaCompras);
