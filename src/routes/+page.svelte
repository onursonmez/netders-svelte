<script>

import Greeting from "../components/home/Greeting.svelte";
import Categories from "../components/home/Categories.svelte";
import UserSlider from "../components/user/UserSlider.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Greeting />

<Categories />

<UserSlider />
