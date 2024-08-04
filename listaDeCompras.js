import { adicionaItem } from "./functions/adicionaItem";

const menu = `
MENU - LISTA DE COMPRAS
    1 - ADICIONAR ITEM
    2 - LISTAR ITENS
    3 - EDITAR ITEM
    4 - REMOVER ITEM
    5 - MARCAR COMO COMPRADO OU NÃO COMPRADO
    6 - RESUMO DA LISTA
`
let listaDeCompra = []
adicionaItem(listaDeCompra)
console.log(listaDeCompra);
