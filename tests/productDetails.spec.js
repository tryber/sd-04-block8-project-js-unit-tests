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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof productDetails('Alcool', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const arr = productDetails('Alcool', 'Máscara');
    for (let i = 0; i < arr; i += 1) {
      assert.strictEqual(typeof arr[i], 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(arr[0] !== arr[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const detP1 = arr[0].details.productId;
    const detP2 = arr[0].details.productId;
    assert.strictEqual(detP1.endsWith('123') && detP2.endsWith('123'), true);
  });
});
