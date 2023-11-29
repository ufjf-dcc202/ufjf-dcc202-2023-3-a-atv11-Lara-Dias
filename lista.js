const lista = ["Um", "Dois", "Três"];

export function getLista() {
    return lista;
}

export function limparLista() {
    lista.splice(0,lista.length);
}

export function adicionaNaLista(novoItem){
    lista.push(novoItem);
}

//export {getLista};