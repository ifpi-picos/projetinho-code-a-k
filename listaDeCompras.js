import { addItem} from './functions/addItem';
import { listarItens } from "./functions/listarItens";
import { editarItem } from "./functions/editarItem";
import { removeItem } from "./functions/removeItem";
import { situation } from "./functions/situation";
import { resumoLista } from "./functions/resumoLista";
//-----------
import { listaDeCompra } from "./bancoDeDados/pegarArquivo.js";

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

export const FILE_NAME = "bancoDeDados/bd.json"

let i = true;
while(i) {
    console.log(menu);
    let escolha = Number(prompt("Escolha uma opção:"));
    switch(escolha) {
        case 1:
            await addItem()
            break;
        case 2:
            listarItens(await listaDeCompra())
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
