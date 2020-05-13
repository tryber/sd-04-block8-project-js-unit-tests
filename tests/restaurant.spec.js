/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    //  assert.fail();
    //  TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(),
    const objetoQualquer = { food: {}, drink: {} };
    //  checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    assert.deepStrictEqual(typeof createMenu(objetoQualquer).fetchMenu(), 'object');
    //  createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    // --------------------------------------------------------------------------------------
    //  TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`,
    // const objetoRetornado = createMenu(objetoQualquer);
    const objetoRetornado = createMenu(objetoQualquer);
    //  verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), { food: {}, drink: {} });
    // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}
    // --------------------------------------------------------------------------------------
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // const objetoRetornado = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: objetoQualquer
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // const objetoRetornado = createMenu(objetoQualquer);
    assert.deepStrictEqual(objetoRetornado.consumption, []);
    // objetoRetornado.consumption // Retorno: []
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, 
    //  tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ["coxinha"]
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha"]);
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // objetoRetornado.order("coxinha"); objetoRetornado.order("agua"); objetoRetornado.order("sopa"); objetoRetornado.order("sashimi");
    objetoRetornado.consumption = []; //reseta a array para os testes não conflitarem
    objetoRetornado.order("coxinha");
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    objetoRetornado.consumption = [];  //reseta a array para os testes não conflitarem
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    assert.deepStrictEqual(objetoRetornado.consumption, ['coxinha', 'agua', 'coxinha']);
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // const objetoRetornado2 = createMenu({ food: {'coxinha': 3.90, 'sanduiche': 9.90}, drinks: {'agua': 3.90, 'cerveja': 6.90} });
    // objetoRetornado2.consumption = [];
    // objetoRetornado2.order('coxinha');
    // objetoRetornado2.order('agua');
    // objetoRetornado2.order('coxinha');
    // assert.strictEqual(objetoRetornado2.pay(), 12.87)
    // objetoRetornado2.pay() // Retorno: somaDosPreçosDosPedidos
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
