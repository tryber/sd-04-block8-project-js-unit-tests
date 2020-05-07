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
  let sumArr = 0;
  let count = 0;
  let flag = '1';

  if (arr.length === 0) {
    flag = undefined;
  }
  arr.forEach((e) => {
    if (typeof e !== 'number') {
      flag = undefined;
    }
    sumArr += e;
    count += 1;
  });
  return (flag === undefined ? undefined : Math.round(sumArr / count));
};

module.exports = average;
