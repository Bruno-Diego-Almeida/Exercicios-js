const media = 7

const alunos = [
    {
        nome:'Maria',
        sobrenome:'da silva',
        nota:10,
    },

    {
        nome:'Jose',
        sobrenome:'moreira',
        nota:4,
    },

    {
        nome:'Paulo',
        sobrenome:'souza',
        nota:7,
    },

    {
        nome:'Pedro',
        sobrenome:'souza',
        nota:5,
    },

   
]

const clientesMaiores = alunos.filter(alunos => alunos.nota >= media)

console.log(clientesMaiores)