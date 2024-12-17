const chaveDaApi = "a4c228e7a5af4d62ad6194434241312"
const botaoDeBusca = document.querySelector('.btn-busca')

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-cidade").value
    
    if(!cidade) return
    
    const dados = await buscarDadosDacidade(cidade)

    if (dados) preencherDadosNaTela(dados, cidade)

})

async function buscarDadosDacidade(cidade) {
        const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`

        const response = await fetch(apiUrl)

        if (response.status !== 200) return

        const dados = response.json()
        return dados
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c
    const icone = dados.current.condition.icon
    const humidade = dados.current.humidity
    const velocidade = dados.current.wind_kph
    const tempoCondicao = dados.current.condition.text

    console.log("Como está o Clima: ", tempoCondicao)

    document.getElementById("cidade").textContent = cidade
    document.getElementById("temperatura").textContent = `${temperatura} ºC`
    document.getElementById("imagem-tempo").setAttribute("src", icone)
    document.getElementById("humidade").textContent = `${humidade}%`
    document.getElementById("velocidade-vento").textContent = `${velocidade} Km/h`

    clima(tempoCondicao)
}

function clima(tempoCondicao) {

    

    switch (tempoCondicao) {
        case "Sol":
            console.log("Está sol")
            break
        case "Parcialmente nublado":
            console.log("Está Parcialmente Nublado")
            break
        case "Chuva moderada ou forte com trovoada":
        case "Possibilidade de chuva irregular":
        case "Aguaceiros fracos":
            console.log("Está com tempo de Chuva")
            break
        case "Encoberto":
            console.log("Está encorberto")
            break
        case "Céu limpo":
            console.log("Céu limpo")
            break
    }
}