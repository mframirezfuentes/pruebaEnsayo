exports.addTest = function (cantidad) {


    if (cantidad >= 2) {
        let result = "stcok " + cantidad
        return result
    } else {
        let result= `No queda stock`
        return result
    }

}