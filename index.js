import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

const listaCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();

  const itemDaLista = criarItemDaLista();
  listaCompras.appendChild(itemDaLista);

  verificarListaVazia();
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
  const itensDaLista = listaCompras.querySelectorAll("li");

  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

verificarListaVazia();
