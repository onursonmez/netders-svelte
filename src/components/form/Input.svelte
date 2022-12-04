<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label;
    export let id = '';
    export let type = 'text';
    export let placeholder = '';
    export let value = '';

    const handleInput = ({ target }) => {
        value = target.value;
    };

    const handleKeypress = ({ charCode }) => {
        if (charCode === 13) dispatch('submit');
    };
</script>

{#if label}
    <label class="block text-sm font-medium leading-8 text-gray-700" for={id}>{label}</label>
{/if}
<input
        {id}
        {type}
        {placeholder}
        {value}
        on:keypress={handleKeypress}
        on:input={handleInput}
        class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"
/>
