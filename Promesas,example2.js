 // Promesa dentro en una función.
  
 const promesaDos = (provincia) => {
    return new Promise((resolve, reject)=>{
        if('Formosa' === provincia){
            resolve('Usted está ubicado en Formosa');
        } else {
            reject('Error al realizar la consulta')
        }
    })
}

promesaDos('Formosa').then((respuesta)=>{console.log(respuesta)}).catch((error)=>{console.log(error)});