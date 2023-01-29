var numeros = 0;
var numeroPar = 0;
var numeroImpar = 0;

for(let numero = 1; numero <= 20; numero ++){
  numeros = numero ** 2;

  if (numeros % 2 == 0){
    numeroPar += numeros;
    
  } else {
    numeroImpar += numeros;
  }
  console.log(numeros); 
}
 console.log("A soma de quadrados pares:",numeroPar);
 console.log("A soma de quadrados ímpares:",numeroImpar);