const carrinho = [25.50, 10.00, 100.00, 5.00]

const soma = carrinho.reduce((acumulador, valor) => acumulador + valor)
   

console.log(soma)