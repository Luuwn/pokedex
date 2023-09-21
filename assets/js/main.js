
const offset = 0;
const limit = 9;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList')



//chamando uma requisição do servidor da api
fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .then((pkmonList) =>{
        for (let i = 0; i < pkmonList.length; i++) {
            const pokemon = pkmonList[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
            
        }
    })

