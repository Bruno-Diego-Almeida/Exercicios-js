


function exibirNatela() {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('ok, parece que funcionou!')
    },10000)
    
    
  })

}

exibirNatela().then(escrever => console.log(escrever))
  
