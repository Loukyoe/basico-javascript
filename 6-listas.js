console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const soaPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`) // adiciona um item na lista
console.log(`Destinos possíveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);
listaDeDestinos.splice(1,1); //tirar um item da lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);
