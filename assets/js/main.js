const pkmList = document.getElementById('pokemonsList')
const loadMoreButton = document.getElementById('loadMoreButton')
let offset = 0
const limit = 10


// function convertPokemonToLi(pokemon) {
//     return `
//         <li class="pokemon ${pokemon.type}">
//             <span class="number">#${pokemon.number}</span>
//             <span class="name">${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</span>
//             <div class="detail">
//                 <ol class="types ">
//                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
//                 </ol>
//                 <img src="${pokemon.picture}" alt="${pokemon.name}">
//             </div>
//         </li>
//     `
// }

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        // const newHtml = pokemonsList.map(convertPokemonToLi).join('')

        const newHtml = pokemonsList.map((pokemon) => `
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
    `).join('')

        pkmList.innerHTML += newHtml 
    })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})