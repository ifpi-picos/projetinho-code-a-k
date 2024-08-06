import { FILE_NAME } from "../listaDeCompras";

export async function listaDeCompra() {
    const file = Bun.file(FILE_NAME);
    const dados = await file.text();
    const objeto = JSON.parse(dados);
    return objeto;
}

export async function adicionaItem(item) {
    const itens = await listaDeCompra();
    itens.push(item);
    await Bun.write(FILE_NAME, JSON.stringify(itens));
}

export async function remove(usuario){
    const usuarios = await getUsuarios();
    const index =  usuarios.findIndex((u) => u.nome === usuario.nome)
    usuarios.splice(index, 1)
    await Bun.write(FILE_NAME, JSON.stringify(usuarios));
}

// export async function exibe(){
//     const file = Bun.file(FILE_NAME);
//     const dados = await file.text();
//     console.log(dados);
    
// }
