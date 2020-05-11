/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepEqual(productDetails('Alcool gel', 'Máscara').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const output = productDetails('Alcool gel', 'Máscara');
    const checkType = (arr) => {
      for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'object') return false;
      }

      return true;
    };

    assert.deepEqual(checkType(output), true);

    // Teste que os dois objetos são diferentes entre si.
    assert.deepEqual(output[0] !== output[1], true);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const checkName = (arr) => {
      for (let i = 0; i < arr.length; i += 1) {
        const lastChars = arr[i].details.productId.slice(arr[i].length - 3);
        if (lastChars !== '123') return false;
      }

      return true;
    };
  });
});
