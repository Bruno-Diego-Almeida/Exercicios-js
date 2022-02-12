
const aluno = {
    
    nome:'Maria',
    sobrenome:'da silva',
    notas:[7,10,8,5,7,9],
}

//A média da Maria foi * para o total de * semestres.

const totalBimestres = aluno.notas.length//Aqui eu consigo identificar a quantdade de itens do array

const somaNotas = aluno.notas.reduce((acc, curr) => {
    return acc + curr//Aqui o acumulador acumula os valores que estão em notas ex: (acc7+10+8+5+7+9)

},0)
     

const mediaFinal = Math.round(somaNotas/totalBimestres)// a função Math.round serve para arredondar o valor

console.log(`A média da ${aluno.nome} foi ${mediaFinal} para o total de ${totalBimestres} semestres`)
