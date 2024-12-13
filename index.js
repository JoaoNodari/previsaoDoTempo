const chaveDaApi = "a4c228e7a5af4d62ad6194434241312"
const botaoDeBusca = document.querySelector(".btn-busca")

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value

    if(!cidade) return

    const dados = await buscarDadosDaCidade(cidade)
    if (dados) preencherDadosNaTela(dados, cidade)
})

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no`
    
    const response = await fetch(apiUrl)

    if(response.status !== 200) return

    const dados = response.json()

    return dados
}

function preencherDadosNaTela(dados, cidade){
    const temperatura = dados.current.temp_c
    const condicao = dados.current.condition.text
    const humidade = dados.current.humidity
    const velocidadeDoVento = dados.current.wind_kph
    const iconeCondicao = dados.current.condition.icon

    document.getElementById("cidade").textContent = cidade
    document.getElementById("temperatura").textContent = `${temperatura} ºC`
    document.getElementById("condicao").textContent = condicao
    document.getElementById("humidade").textContent = `${humidade}%`
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`
    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao)
}