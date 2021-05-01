

//----------------EJERCICIO

// Generar una clase que se llame Perro
//- color
// - complexion


//genere otra clase que se llame Raza, que herede de perro
// - tamaño
// - esAgresivo (raza), return . SI SE ENVIA COMO RAZA ROTWEILER, REGRESAR TRUE DE LO CONTRATIO FALSE


//CLASESexte
// HERENCIA : tener en cuenta que va de lo general a lo particular 
export class Perro {
    constructor(){
   }
   set color (color){
      this._color;
  }
  get color(){
      return this._color;
  }
   set complexion (complexion){
       this._complexion;
   }
   get complexion(){
       return this._complexion;
   }
}

export class   Razaa extends Perro{ // heredara lo de Perro
constructor (tamanio, raza){
    super();
    this._tamanio = tamanio;
    this._raza = raza;
}

esAgresivo(){
    return raza == 'ROTWEILER' ? true : false;
    }
}