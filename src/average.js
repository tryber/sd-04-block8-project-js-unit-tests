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
  const test = arr.filter(c => typeof c !== 'number');
  if (arr.length !== 0 && test.length === 0) {
    const sum = arr.reduce((acc, cum) => acc + cum);
    if (sum === 0) {
      return 0;
    }
    return Math.round(sum / arr.length);
  }
  return undefined;
};

const arr = [-11, 5, 2];
console.log(average(arr));
module.exports = average;
