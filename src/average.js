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
  let sum = 0;
  arr.forEach((element) => {
    if (typeof (element) !== 'string') {
      sum += element;
    } else if (arr.length === 0) {
      return undefined;
    } else {
      return undefined;
    }
    return sum;
  });
  const media = sum / arr.length;
  const resto = media - parseInt(media, 10);
  if (resto === 0) {
    return media;
  } else if (resto > 0.5) {
    return Math.ceil(media);
  }
  return Math.floor(media);
};

module.exports = average;
