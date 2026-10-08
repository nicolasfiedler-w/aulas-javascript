const produtos = [{ nome: 'Teclado', preco: 100}, { nome: 'Mouse', preco: 50}];

const precoAtualizado = produtos.map((produto) => ({
    ...produto,
    preco: produto.preco * 0.9,

    
}
))

console.log(precoAtualizado)
