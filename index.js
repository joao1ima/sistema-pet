const { moveMessagePortToContext } = require("worker_threads");
const json = require("./json");
const moment = require('moment');
//const dateFns = require('date-fns'); // essa maneira exporta todo os métodos do arquivo
const {differenceInDays, differenceInMonths} = require('date-fns') // esse modo já desestruturado, ou seja, só puxa os arquivos indicados entre chaves

const {
listarPets,
validaDados,
cadastrarPet,
servicosPrestados,
darBanhoNoPet,
tosarPet,
cadastrarPetsSpreadOperator,
filtrarPetPorNome,
contagemDePets,
removerPet

} = require('./functions-pets');

// testando uso da date-fns
let data1 = new Date(2020,11,11);
let data2 = new Date(2000,11,11);
let diferencaGeral = differenceInDays(data1, data2);
//console.log(diferencaGeral)


let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];


let novoPet = {
  nome: 'Biro Biro',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}


//listarPets(pets);
cadastrarPet(pets, novoPet)

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)
//console.log(pets);


// cadastrarPetsSpreadOperator()

// cadastrarPet(pets, novoPet)

// console.log(cadastrarPetsSpreadOperator(pets, json))

// console.log(cadastrarPetsFor(pets, json))

// console.log(filtrarPetPorNome(pets, 'Yoshi'))

// contagemDePets(pets)

// removerPet(2, pets)