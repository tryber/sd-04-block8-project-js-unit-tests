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
        assert.equal(Array.isArray(productDetails()), true)
            // Teste que o array retornado pela função contém dois itens dentro.
        assert.equal(productDetails('Alcool gel', 'Máscara').length, 2)
            // Teste que os dois itens dentro do array retornado pela função são objetos.
        assert.equal(typeof(productDetails('Alcool gel', 'Máscara')), 'object')
            // Teste que os dois objetos são diferentes entre si.
        const iguais = productDetails('Alcool gel', 'Máscara')[0].name === productDetails('Alcool gel', 'Máscara')[1].name;
        assert.equal(iguais, false)
            // (Difícil) Teste que os dois productIds terminam com 123.
        const product0 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
        const product1 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
        const p1 = product0.substring(product0.length - 3);
        const p2 = product1.substring(product1.length - 3);
        assert.equal(p1 === p2, true);
    });
});