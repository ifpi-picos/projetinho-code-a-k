export const listarItens = (lista) => {
    console.log("Ordem:\n1 - Alfabética\n2 - Categoria\n3 - Quantidade");
    const op = Number(prompt("Digite o número da opção: "))

    if(lista) {
        switch(op){
            case 1:
                lista.sort((a, b) => a.nome.localeCompare(b.nome));
                console.table(lista);
                break;
            case 2:
                lista.sort((a, b) => a.categoria.localeCompare(b.categoria));
                console.table(lista);
                break;
            case 3:
                lista.sort((a, b) => a.quantidade - b.quantidade);
                console.table(lista);
                break;
            default:
                console.log("Opção inválida.");
                return;
        }
    }
}