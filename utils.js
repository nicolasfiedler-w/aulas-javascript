export function saudacao(nome = 'Visitante') {
    console.log(`Olá, ${nome}`);
  }

  export const dobro = n => n * 2;

  export const formatarMoeda = valor => {
    const preco= valor.toFixed(2).replace('.',',');
    return preco
  }

  export const validarEmail = email => {
    console.log(email.includes('@','.'))
        return email
    
  }

  export const obterDataFormatada = () => {
    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR');

    return dataFormatada


  }