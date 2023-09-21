

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

const pokemonList = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pkmonList) =>{

        const listItem = []

        //pkmonList.map

        for (let i = 0; i < pkmonList.length; i++) {
            const pokemon = pkmonList[i];
            listItem.push(convertPokemonToLi(pokemon))
            
        }
        
        console.log(listItem)
    })

