<script>
    import { fade } from 'svelte/transition';

    export let pokeman;
</script>

<a 
    class="p-6 bg-gray-100 text-gray-800 text-center flex flex-col items-center rounded-md shadow-sm hover:shadow-md" 
    href={`/pokemon/${pokeman.id}`}
    transition:fade
>
    <img class="h-40 w-40" src="{pokeman.image}" alt="{pokeman.name}">
    <h2 class="uppercase text-2xl">{pokeman.id}. {pokeman.name}</h2>
</a>