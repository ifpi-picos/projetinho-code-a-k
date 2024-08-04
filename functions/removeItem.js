export const removeItem = (lista) => {
    const nomeItem = prompt("Digite o nome do item que deseja remover:").toLowerCase()
    const itemIndex = lista.findIndex(lis => lis.nome.toLowerCase() === nomeItem);

    if (itemIndex === -1) {
        return console.log("Item não encontrado.")
    }
    const confirma = prompt("Tem certeza que quer remover este item?[s - SIM/n - NÃO]").toLowerCase()
    if (itemIndex >= 0 && itemIndex < lista.length && confirma === "s"){
        lista.splice(itemIndex, 1)
        console.log("Item removido com sucesso!")
    } else if (confirma == "n") {
        console.log("Operação cancelada.")
    } else {
        console.log("Opção inválida.");
    }
}