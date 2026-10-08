const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(nome) {
    nome = [...new Set(nomesRepetidos)]

return nome;
}

console.log(limparLista())