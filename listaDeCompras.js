import { adicionaItem } from "./functions/adicionaItem";
import { listarItens } from "./functions/listarItens";
import { editarItem } from "./functions/editarItem";
import { removeItem } from "./functions/removeItem";
import { situation } from "./functions/situation";
import { resumoLista } from "./functions/resumoLista"

const menu = `
MENU - LISTA DE COMPRAS
    1 - ADICIONAR ITEM
    2 - LISTAR ITENS
    3 - EDITAR ITEM
    4 - REMOVER ITEM
    5 - MARCAR COMO COMPRADO OU NÃO COMPRADO
    6 - RESUMO DA LISTA
    0 - SAIR
`
let listaDeCompra = [
    {
        nome: "Abacaxi",
        quantidade: 2,
        categoria: "Fruta",
        status: "comprado ✅"
    },{
        nome: "Espinafre",
        quantidade: 9,
        categoria: "Fruta",
        status: "comprado ✅"
    },{
        nome: "Prego",
        quantidade: 50,
        categoria: "Ferramenta",
        status: "não comprado ❌"
    }
]

let i = true;
while(i) {
    console.log(menu);
    let escolha = Number(prompt("Escolha uma opção:"));
    switch(escolha) {
        case 1:
            adicionaItem(listaDeCompra)
            break;
        case 2:
            listarItens(listaDeCompra)
            break;
        case 3:
            editarItem(listaDeCompra)
            break;
        case 4:
            removeItem(listaDeCompra)
            break;
        case 5:
            situation(listaDeCompra)
            break;
        case 6:
            resumoLista(listaDeCompra)
            break;
        case 0:
            console.log("Obrigado pela preferência! Até logo!");
            i = false;
            break;
        default:
            console.log("Opção Inválida!! Escolha uma opção existente.");
    }
}
