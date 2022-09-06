const promesaCuatro = async()=>{

    return await new Promise( (resolve,reject)=> {
        ( true === arguments )
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
    })
    
}

promesaCuatro(true).then((respuesta)=>{console.log(respuesta)}).catch((error)=>{console.log(error)})