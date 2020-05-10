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

const soma = (total, adicional) => { total += adicional; };

const average = (entrada) => {
  let media = 0;
  let somatorio = 0;

  if (entrada.length === 0) return undefined;

  for (let i = 0; i < entrada.length; i += 1) {
    if (entrada[i] !== number || entrada[i] === undefined) return undefined;
    somatorio = soma(somatorio, entrada[i]);
  }

  media = Math.round(somatorio / entrada.length);
  return media;
};

module.exports = average;
