function converterMoeda(){
    let valorEmReais = parseFloat(document.getElementById("valor").value);
    let moedaSelecionada = document.getElementById("moeda").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valorEmReais) || valorEmReais <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        return;
    }

    let taxaDolar = 5.7298; 
    let taxaEuro = 6.1779; 
    let taxaPeso = 0.00535;

    let valorConvertido;

    // Convertendo com base na moeda escolhida
    if (moedaSelecionada === "usd") {
        valorConvertido = valorEmReais / taxaDolar;
        resultado.innerText = `💵 ${valorConvertido.toFixed(2)} USD`;
    } else if (moedaSelecionada === "eur") {
        valorConvertido = valorEmReais / taxaEuro;
        resultado.innerText = `💶 ${valorConvertido.toFixed(2)} EUR`;
    } else if (moedaSelecionada === "ars"){
        valorConvertido = valorEmReais / taxaPeso;
        resultado.innerText = `$ ${valorConvertido.toFixed(2)} ARS`;
    }
}
