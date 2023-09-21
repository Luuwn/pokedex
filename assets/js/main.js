const pkmList = document.getElementById('pokemonsList')
const loadMoreButton = document.getElementById('loadMoreButton')
let offset = 0
const limit = 10
const maxRecords = 100


// 1, 2, 3, 4, 5           0 - 5
// 6, 7, 8, 9, 10          5 - 5
// 11,                     10 - 5 (remove o botão)


function loadPokemonItens(offset, limit) {
    // ARRUMANDO A NÚMERAÇÃO COM UM FORMATO
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        const newHtml = pokemonsList.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number.toString().padStart(4, '0')}</span>
            <span class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</span>
            <div class="detail">
                <ol class="types ">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.picture}" alt="${pokemon.name}">
            </div>
        </li>
    `).join('')

        pkmList.innerHTML += newHtml 
    })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtRecordsNextPage = offset + limit

    if(qtRecordsNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})