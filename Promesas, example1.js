    
    // Transformar todas las funciones declarativas en funciones flecha.
    // Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.
    // Simplificar el código de las funciones.
    // Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.
    
    
    // Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            (resolve('Los valores son iguales'));
        } else {
            reject('Los valores son distintos')
        }

    });

    promesa.then((respuesta)=>{console.log(respuesta)}).catch((error)=>{console.log(error)})