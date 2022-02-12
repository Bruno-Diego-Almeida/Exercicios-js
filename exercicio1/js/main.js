const alunos = [
    {
        nome:'Maria',
        sobrenome:'da silva',
    },

    {
        nome:'Jose',
        sobrenome:'moreira',
    },

    {
        nome:'Paulo',
        sobrenome:'souza',
    },

   
]

let clientesLojaMap = alunos.map((nomeQualquer) =>{
    return nomeQualquer.nome + ' ' + nomeQualquer.sobrenome
})

console.log(clientesLojaMap)