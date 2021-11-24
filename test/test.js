let expect= require('chai').expect
let simple=require('../Algoritmos/algoritmoSimple')
let complejo=require("../Algoritmos/algoritmoComplejo")

describe("prueba del simple",function(){
    describe("Cantidad mayor a 2",function(){
        it("Cantidad mayor a 2",function(){
           result= simple.algoritmoSimple(10)
            expect(result).to.equal("Stocks de Seguridad con Algoritmo Simple: 2")
        })
    })
})

describe("prueba del simple",function(){
    describe("Cantidad menor a 2",function(){
        it("Cantidad menor a 2",function(){
           result= simple.algoritmoSimple(1)
            expect(result).to.equal("No queda stock")
        })
    })
})

describe("Prueba algoritmo Complejo",function(){
    describe("Cantidad 32",function(){
        it("Cantidad igual a 2",function(){
           result= complejo.algoritmoComplejo(32)
            expect(result).to.equal("Stocks de Seguridad con Algoritmo Complejo: 5")
        })
    })
})

describe("Prueba algoritmo Complejo",function(){
    describe("Cantidad 0",function(){
        it("Cantidad igual a 0",function(){
           result= complejo.algoritmoComplejo(0)
            expect(result).to.equal("No queda stock")
        })
    })
})