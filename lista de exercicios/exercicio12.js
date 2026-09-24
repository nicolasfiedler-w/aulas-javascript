const aprovados = () => {
let notas = [1, 7, 10, 8];

for (let nota of notas) {
if (nota>=7) {
   
        console.log(`Nota = ${nota}, aprovado.`)
    }
}
}

console.log(aprovados())