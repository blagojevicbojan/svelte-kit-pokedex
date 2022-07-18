<script>
    import { pokemon } from '../stores/pokestore.js';
    import PokemanCard from '../components/pokemanCard.svelte';

    let searchTerm = '';
    let filteredPokemon = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemon.filter(
                pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
            );
        } else {
            filteredPokemon = [ ... $pokemon ];
        }
    };
</script>

<svelte:head>
    <title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input 
    class="p-4 w-full border-2 border-gray-200 rounded-md text-lg" 
    type="text" 
    placeholder = 'Search Pokemon' 
    bind:value={searchTerm}
>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard {pokeman} />
    {/each}
</div>



