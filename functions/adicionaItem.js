import { validar } from "./validar"

export const adicionaItem = (lista) => {
    const nomeItem = prompt("Nome do Item:")
    const quantidade = Number(prompt("Quantidade:"))
    const categoria = prompt("Categoria:")

    if (validar(nomeItem, quantidade, categoria) == false) {
        console.log("Algum campo está vazio ou inválido, tente novamente preenchendo todos os campos.");
    } else {
        const obj = {
            nome: nomeItem,
            quantidade: quantidade,
            categoria: categoria,
            status: "não comprado ❌"
        }
        lista.push(obj)
        console.log("Item adicionado com sucesso!");
    }       
}