const promesaTres = (valorBooleano) => {
    return new Promise((resolve, reject)=>{
        ( true === valorBooleano )
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
    })
}

promesaTres(true).then((respuesta)=>{console.log(respuesta)}).catch((error)=>{console.log(error)})
