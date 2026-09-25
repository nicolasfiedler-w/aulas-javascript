const compra = (precos) => {let total = 0

for (let preco of precos) {
    total= total + preco
}
return total;

}

const listaPrecos = [120,100,67,200]

console.log(compra(listaPrecos))