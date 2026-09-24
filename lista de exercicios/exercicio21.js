const missoes = [
    {nome: "Derrotar chefe", pontos: 500},
    {nome: "Encontrar tesouro", pontos: 200},
    {nome: "Salvar personagem", pontos: 800},
    {nome: "Explorar mapa", pontos: 100}

];
    

const analisarMissoes = () => {
    for (let missaoAtual of missoes) {
        if (missaoAtual.pontos >= 500) {
            console.log(`${missaoAtual.nome}: Missão difícil`)
        }
        else if (missaoAtual.pontos >= 200) {
            console.log(`${missaoAtual.nome}: Missão média`)
    }
    else {
        console.log(`${missaoAtual.nome}: Missão fácil`)
    }
}
}

analisarMissoes()