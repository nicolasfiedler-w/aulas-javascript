    const bissextos = (anoFinal) => {
   

    for (let i = 2000; i<= anoFinal; i++){
        if (i % 4 === 0) {
            console.log(`${i}: Ano bissexto`)
        }
    }
}
console.log(bissextos(3000))