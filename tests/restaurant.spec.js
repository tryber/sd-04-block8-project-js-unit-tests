/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require("assert");
const createMenu = require("../src/restaurant");

describe("#createMenu", () => {
  it("tests the function has the correct behaviour", () => {
    // assert.fail();
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    // ```
    const retornoMenu = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    assert.deepStrictEqual(Object.entries(retornoMenu)[0], [
      "fetchMenu",
      {
        food: { coxinha: 3.9, sanduiche: 9.9 },
        drinks: { agua: 3.9, cerveja: 6.9 },
      },
    ]);
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```

    assert.deepStrictEqual(createMenu({ food: {}, drinks: {} }).fetchMenu, {
      food: {},
      drinks: {},
    });
    // ```
    // Agora faça o TESTE 3 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    const retornoMenu2 = createMenu({
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    assert.deepEqual(retornoMenu2.fetchMenu, {
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    // ```
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    assert.deepStrictEqual(retornoMenu.consumption, []);
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    retornoMenu.order("coxinha");
    assert.deepStrictEqual(retornoMenu.consumption, ["coxinha"]);
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    const retornoMenu3 = createMenu({
      food: { coxinha: 6.9, sashimi: 19.9, sopa: 8.9 },
      drinks: { agua: 3.9, cerveja: 6.9 },
    });
    retornoMenu3.order("coxinha");
    retornoMenu3.order("agua");
    retornoMenu3.order("sopa");
    retornoMenu3.order("sashimi");
    assert.deepStrictEqual(retornoMenu3.consumption, [
      "coxinha",
      "agua",
      "sopa",
      "sashimi",
    ]);
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    retornoMenu3.order("sashimi");
    retornoMenu3.order("coxinha");
    assert.deepStrictEqual(retornoMenu3.consumption, [
      "coxinha",
      "agua",
      "sopa",
      "sashimi",
      "sashimi",
      "coxinha",
    ]);
    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    assert.strictEqual(retornoMenu3.pay(), 73.04);
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
