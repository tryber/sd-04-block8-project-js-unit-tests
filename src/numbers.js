/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (myArray) => {
  if(myArray.length == 0) return false;
  let zerado = 0;
  for (let i = 0; i < myArray.length; i += 1) {
    if (typeof myArray[i] !== 'number') {
      zerado += 1;
    }
  } if (zerado > 0) {
    return false;
  } return true;
};
console.log(numbers([1, 2]));
console.log(numbers([1, 2, 3, 4, 5]));
console.log(numbers([1, 2, 'a']));
console.log(numbers([]));
module.exports = numbers;
