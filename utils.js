export const IVA = 16; 

export default IVA;

//Promises and Error Handling
{
    try{
        console.log('Antes de propagar un eror');
        throw new Error('Ocurrio un error!');
    } catch(error){
        console.error('Error', error);
    }
}


try{
    console.log('En try 1');
    funcionQueNoExiste();
    console.log('En try 2');
;} catch(error){
    if(error instanceof ReferenceError){
        console.log('Ocurrio un error de referencia');
    }else{
console.error(error);
    } 
 }
  finally{
        console.log('esta accion siempre se va a e');
    }


//Clausula finally es un fragmento de codigo ya sea que ocurra una excepcion o no será ejecutada.

//Callback: funcion que se pasa a otra funcion como un argumento que luego invoca de la funcion externa para completar algun tipo de accion

// {
//     function imprimemensaje(mensaje){
//         console.log('El mensaje es', mensaje);
//     }
//     function ejemplocallback (a,b,callback){
//         let suma = a+b;
//         callback (`El resukltado de la suma es ${suma}`);
//     }
//     ejemplocallback(1,2, imprimemensaje);
// }

// {
//     let x = 10;
//     const p = new Promise((resolve, reject) =>{ // resolve : si fue de manera exitosa, reject : si algo fallo
//     if (x ==10){
//         resolve('La variable es igual a 10');
//     }else{
//         reject('La variable no es igual a 10');
//     }
//     });

//     p.then(res =>{
//         console.log(res);
//     }).catch(error =>{
//         console.error(error);
//     });
// }


// PROMESA
{
    let x = 10;

    console.log('Proceso se ha iniciado');

    setTimeout(function timer(){
        x = x * 2 + 2;
        console.log('El proceso ha terminado');
    },500)
    console.log('3. El resultado es : ',x);
}

{
    let x = 10;
    console.log('1.Proceso se ha iniciado');
    const promesa = new Promise ((resolve, reject) =>{
        setTimeout(function timer(){
            x = x * 2 + 2;
            console.log('El proceso ha terminado');
        },500)
        console.log('3. El resultado es : ',x);
    })
}

//
{
let  usuarios = [
    {
        id:1,
        nombre:'Jessica'
    },{
        id:2,
        nombre:'Carlos'
    }
];
let telefonos =[
    {
    id:1,
    telefono:55674567
    },{
        id:2,
        telefono:4535354
    }
];

const obtenerusuario = id => {
    return new Promise((resolve, reject) =>
    {
        if(usuarios.find(v=> id = v.id)){
            console.log('El usuario existe');
            resolve('Exito');
        }else{
            reject('El usuario no existe')

        }
    });
}
obtenerusuario(1).then(res =>{
    console.log(res);
});






}