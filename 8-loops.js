console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 10;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:")
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        //console.log("Destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!")
}else{
    console.log("Desculpe tivemos um erro!")
}

for(i = 0 ; i < 3 ; i++ ){
    if(listaDeDestinos[i] == destino){
        //console.log("Destino existe");
        destinoExiste = true;
    }
}