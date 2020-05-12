/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento :
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arr) => {
  let result = 0;
  if (arr.length === 0) return undefined; //  retorna undefined se for array vazia
  for (let i = 0; i < arr.length; i += 1) { //  loop para fazer somatória dos elementos da array
    if (typeof arr[i] !== 'number') return undefined; //  verificar se tipo do elemento [i] é number para continuar ou retornar undefined
    result += Math.round(arr[i]); // somatoria dos elementos já arredondados
  }
  result = Math.round(result / arr.length); //  faz a média e ja arredonda
  return result; // caso todos os elementos forem do tipo number, o retorno será a média arredondada
};
module.exports = average;
