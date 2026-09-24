const loja = valorCompra => (valorCompra>150) ? 'Frete Grátis' : 'Cobrar Frete'

console.log(loja(160))