/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/
function notNull (x){
  if(x!="" && !(x.match(/^\s+$/))){
      return true;
  }else{
      return false;
}
};

const vqv = (nome, idade) => {

if(nome == '' || idade.length === 0) {
  return undefined;
}
 console.log(`Oi, meu nome é ${nome}!
tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`);
};
console.log(vqv('victor',4));

module.exports = vqv;
