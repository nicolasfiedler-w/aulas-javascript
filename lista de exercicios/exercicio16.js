const vip = nomes => {
   const nomeBuscado = 'Davi'
   
    for (nome of nomes) {
        if (nome === nomeBuscado) {
            return ('true')
    }
       
        }
        return ('false')
    }
    

    const listaNomes = ['Daniel','Renan','Nicolas','Renan']


    console.log(vip(listaNomes))