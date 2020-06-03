/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require("assert");
const productDetails = require("../src/productDetails");

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

describe("#productDetails", () => {
  it("tests the function has the correct behaviour", () => {
    var func = productDetails("teste1", "teste2");
    assert.deepStrictEqual(Array.isArray(func), true);
    assert.ok(Object.keys(func).length === 2);
    assert.deepStrictEqual(typeof func[0] && typeof func[1], "object");
    assert.notStrictEqual(func[0].name, func[1].name, "they are the same");
    assert.ok(product[0].details.productId.slice(-3) === '123');
    assert.ok(product[1].details.productId.slice(-3) === '123');
  });
});
