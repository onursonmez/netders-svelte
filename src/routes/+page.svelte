<script>

import Greeting from "../components/home/Greeting.svelte";
import Categories from "../components/home/Categories.svelte";
import Slider from "../components/user/Slider.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Greeting />

<Categories />

<Slider />


<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
