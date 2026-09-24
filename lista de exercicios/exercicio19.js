const robo = distanciaParede => {
    let passos = 0

    while (passos != distanciaParede) {
        passos++;

    console.log(`Passo número: ${passos}`)

        if (passos === distanciaParede) {
            console.log('Bateu e parou!')
        }
    }

}

robo(20)