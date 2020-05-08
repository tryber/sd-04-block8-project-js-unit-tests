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
    - average([2, 2]) // Retorno: 2;
*/

const average = (array) => {
  if (
    array.length > 0 &&
    array.every(element => typeof element === 'number')
  ) {
    return Math.round(array.reduce((a, c) => a + c, 0) / array.length);
  }
  return undefined;
};

module.exports = average;
