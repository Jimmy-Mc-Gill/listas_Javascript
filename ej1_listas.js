
    // Crea una lista de números pares del 2 al 20 utilizando un bucle while.
     var lista_pares=[];
     var i=0;
     while(i<=20){
     lista_pares.push(i);
     i=i+2;
     }
     console.log("ListaDeNumeros: "+ lista_pares);

    // Crea una lista de números impares del 1 al 19 utilizando un bucle for.
  var lista_impares=[];
  
  for(var index=0; index<=19; index++){
  if(i % 2 == 1){
    lista_impares.push(index);
  };
};
    // Crea una lista de comida.
    var lista_comida=["Spagetti","Sopa","Hamburguesa","Cacata","Bebés","Durum","Almejas"];
    console.log("ComidasListadas"+ lista_comida);
    // Agrega un elemento al principio de la lista de comida que creaste en el ejercicio 
    //anterior.
    lista_comida.unshift("Sopa du Pêssego");
    // Accede al segundo elemento de la lista de comida y cambia su valor por otro diferente.
    lista_comida[2] = "Papas con carne";
    // Recorre la lista de comida utilizando un bucle while y muestra cada elemento 
    //en la consola.
    var j=0
    while(j<=lista_comida.length){
      lista_comida.push(j);
      j=j+1
    };
    // Crea una función que reciba una lista como parámetro y devuelva el último 
    //elemento de la lista.
    function verUltimoElementoDeListaDeComida(lista){
      return lista.length
    };
    //Crea una función que sume dos números
    function sumarDosNumeros(num1,num2){
      return num1+num2
    };
    // Crea una función que reciba una lista y un elemento como parámetros y agregue 
    //el elemento a la lista si no se encuentra en ella.
    var numeros_de_lista=[1,2,3,4,5,6];
    function agregarElementoALista (_listanumeros,_numlista){
      for(var i=0; i<_listanumeros.length; i++){
        if(_listanumeros[i] == _numlista){
           return true;
        }
      }
    }
    // Crea una función que reciba una lista como parámetro y devuelva una nueva lista 
    //con los elementos de la lista original en orden inverso.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva la 
    //suma de todos los números de la lista.
    
    // Crea una función que reciba una lista de números como parámetro y devuelva 
    //la media de todos los números de la lista.