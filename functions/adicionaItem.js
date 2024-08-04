export const adicionaItem = (lista) => {
    const nomeItem = prompt("Nome do Item:")
    const quantidade = Number(prompt("Quantidade:"))
    const categoria = prompt("Categoria:")

    if(nomeItem === null || quantidade <= 0 || isNaN(quantidade) || quantidade === null || categoria === null){
        console.log("Algum campo está vazio ou inválido, tente novamente preenchendo todos os campos.");
    } else {
        const obj = {
            nome: nomeItem,
            quantidade: quantidade,
            categoria: categoria
        }
        lista.push(obj)
        console.log("Item adicionado com sucesso!");
    }       
}