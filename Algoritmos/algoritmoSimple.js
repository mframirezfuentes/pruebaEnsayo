exports.algoritmoSimple= function (cantidad) {

   
    let stockSeguridad = 2
    let enStock = stockSeguridad

  
        if (cantidad > 2) {
            let result= `Stocks de Seguridad con Algoritmo Simple: ${enStock}`
            return result
           
        } else {
         let result =`No queda stock`
         return result
        }
 
}


