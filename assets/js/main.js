
const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;


//chamando uma requisição do servidor da api
fetch(url).then(function (response){
    console.log(response);
})

