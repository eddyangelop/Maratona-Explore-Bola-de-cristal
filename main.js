const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  'Certamente!',
  'Reze ao phaii.',
  'Ô Phaii responderá.',
  'Receberás desaprovação do santissimo.',
  'Está abeçoado!',
  'Reze com mais fervor antes.',
  'O Manto sagrado está sobre sua decisão!',
  'Eu desaprovo tais decisões levianas.',
  'Se rezou está a um passo do Milagre.',
  'Minha revelação poderá abala-lo.',
  'Minhas visões mostram que sim.',
  'Minhas revelações mostram que não.',
  'Está nas mãos do Phaii.',
  'Os sinais não são celestiais.',
  'O tempo da colheita será boa.',
  'O tempo das Vacas Magras irá chegar .',
  'Sim Meus filhos.',
  'Não é esta a bênção que lhe aguarda.',
  'Os sinais da revelação estão a seu favor.'
]

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  const pergunta = '<div>' + inputPergunta.value + '</div>'

  // gerar numero aletorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
