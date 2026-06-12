// cardapio.js - Lógica interativa da Lanchonete do Bairro

console.log("Cardápio carregado com sucesso!");

// Array de itens do cardápio (Questão 10b)
const itensCardapio = [
    { id: 1, nome: "X-Burguer", preco: 18.90, categoria: "Lanches" },
    { id: 2, nome: "X-Bacon", preco: 21.90, categoria: "Lanches" },
    { id: 3, nome: "Combo Família", preco: 45.90, categoria: "Combos" }
];

// Carregar e listar itens no console ao carregar a página
function listarItensConsole() {
    console.log("--- NOSSAS OPÇÕES ---");
    itensCardapio.forEach(item => {
        console.log(`[${item.categoria}] ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')}`);
    });
}
listarItensConsole();

function fazerPedido(itemNome) {
    alert(`Pedido recebido! Você escolheu: ${itemNome}. Seu lanche já está sendo preparado! 🍔🚀`);
}
