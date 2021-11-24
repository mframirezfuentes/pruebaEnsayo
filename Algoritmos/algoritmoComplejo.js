exports.algoritmoComplejo= function(producto) {

  let stockSeguridad = 2;

  if (producto > 20) {
    let nuevoStock = Math.round(stockSeguridad + (producto * 0.1))
    let result = `Stocks de Seguridad con Algoritmo Complejo: ${nuevoStock}`
    return result

  } else {
    if (producto >= 10) {
      let nuevoStock = Math.round(stockSeguridad + (producto * 0.05))
      let result = `Stocks de Seguridad con Algoritmo Complejo:  ${nuevoStock}`
      return result
    } if(producto <10&& producto>=2) {
      let result=`Stocks de Seguridad con Algoritmo Complejo:  ${stockSeguridad}`
      return result
    }if(producto<=2){
      let result=`No queda stock`
      return result
    }

  }
}
