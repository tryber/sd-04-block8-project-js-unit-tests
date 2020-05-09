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
let txt ;
if(nome == '' || idade == undefined) {
  return undefined;
}
 txt = `Oi, meu nome é ${nome}!
tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
return txt;
};
//console.log("certo" + vqv('victor',4));
//console.log("errado" + vqv('',4));
//console.log("errado" + vqv('victor',));

module.exports = vqv;
