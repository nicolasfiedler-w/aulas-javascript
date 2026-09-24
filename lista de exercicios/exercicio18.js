const banco = () => {
    const array = [true,false]
    const vazio = []

    for (let dados of array){
        vazio.push(
            (dados=== true) ? 'Concluído' : 'Pendente'
        )

    }
    return (vazio)
}

console.log(banco())