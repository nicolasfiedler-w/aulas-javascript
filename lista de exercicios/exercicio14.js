const compra = (preços) => {let total = 0

for (let preço of preços) {
    total= total + preço
}
return total;

}

const listaPreços = [120,100,67,200]

console.log(compra(listaPreços))