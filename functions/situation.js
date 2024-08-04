import { exibir } from "./exibir";

export const situation = (lista) => {
    exibir(lista);
    const nome = prompt("Digite o nome do item: ").toLowerCase()
    const i = lista.findIndex(elemento => {
        return elemento.nome.toLowerCase() === nome
    })

    if (i !== -1) {
        const op = Number(prompt("1 - Marcar como comprado\n2 - Marcar como não comprado\n=> "))
        switch(op) {
            case 1:
                lista[i].status = "comprado ✅"
                console.log("Item marcado como comprado.")
                break
            case 2:
                lista[i].status = "não comprado ❌"
                console.log("Item marcado como não comprado.")
                break
            default:
                console.log("Opção inválida.")
                break
        }
    }
}