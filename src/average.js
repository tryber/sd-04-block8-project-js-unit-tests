/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  // console.log(`Calcule a média do vetor ${arr}`);
  let counter = 0;
  for (let i=0; i<arr.length; i++){
    // console.log(`O elemento da posição '${i}' é do tipo: ${typeof(arr[i])}`)
      if (typeof(arr[i]) === "number"){
        counter += arr[i];
      } else return 'undefined';
    }
  // console.log(`A soma dos elementos do vetor é igual a ${counter}`);
  let average = counter / arr.length;
  return Math.round(average);
};
// console.log(`A média dos elementos do vetor é ${average([2, 2])}`);
// console.log(`A média dos elementos do vetor é ${average([1, 2])}`);
// console.log(`A média dos elementos do vetor é ${average([1, '2'])}`);
average([2, 2]);
average([1, 2]);
average([1, '2']);
module.exports = average;
