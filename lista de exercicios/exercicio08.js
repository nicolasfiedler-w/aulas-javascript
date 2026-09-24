const mostrarClientes = (nomes) => {
    for (const cliente of nomes) {
        console.log("Cliente: " + cliente);
    }
};

mostrarClientes(["Roberto", "Emanuel"]);