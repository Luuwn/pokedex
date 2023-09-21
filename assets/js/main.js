
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</span>
            <div class="detail">
                <ol class="types ">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.picture}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pkmList = document.getElementById('pokemonsList')

pokeApi.getPokemons().then((pokemonsList = []) => {
    pkmList.innerHTML = pokemonsList.map(convertPokemonToLi).join('')
})
