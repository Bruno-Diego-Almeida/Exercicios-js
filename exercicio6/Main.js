const formulario = document.querySelector('#formulario')
const botaoEnviar = document.querySelector('#botaoEnviar')
const inputMensagem = document.querySelector('#inputMensagem')
const carregandoII = document.querySelector('#carregandoI')
const msg = document.querySelector('#msg')

function job(aparecer) {      
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(aparecer)
      }, 10000)
    })
  }

formulario.onsubmit = function(e) {
    e.preventDefault()

    const mensagem = inputMensagem.value

    botaoEnviar.classList.add('hidden')
    carregandoI.classList.remove('hidden')

    job(mensagem).then(aparecer =>{
        formulario.classList.add('hidden')
        msg.innerHTML =  aparecer
    })
}

