const bonus = () => {
    let gastoTotal = 0
    const salarios = [1000,2100,2000]
   

    for (let salario of salarios) {
        (salario<2000) ? gastoTotal = salario + (salario * 0.1) : gastoTotal = (salario + salario)
    
    }

    return gastoTotal
}

console.log(bonus())