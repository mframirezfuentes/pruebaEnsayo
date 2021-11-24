let simple =require('./algoritmoSimple')
let complejo=require('./algoritmoComplejo')

function algoritmos(){
    let aleatorio=[]
    let n1=Math.round(Math.random()*(50-0)+0)
    let n2=Math.round(Math.random()*(50-0)+0)
    let n3=Math.round(Math.random()*(50-0)+0)
    let n4=Math.round(Math.random()*(50-0)+0)
    let n5=Math.round(Math.random()*(50-0)+0)
    aleatorio.push(n1)
    aleatorio.push(n2)
    aleatorio.push(n3)
    aleatorio.push(n4)
    aleatorio.push(n5)
    console.log(aleatorio)
    
    for (let index = 0; index < aleatorio.length; index++) {
        const element = aleatorio[index];
      console.log(simple.algoritmoSimple(element))
      console.log(complejo.algoritmoComplejo(element))
    }
}

module.exports=algoritmos()