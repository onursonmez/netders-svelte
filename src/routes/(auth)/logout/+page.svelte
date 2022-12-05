<script>
	import { userStore } from '/src/stores/userStore'
	import { goto } from '$app/navigation';
	import {onMount} from "svelte";
	import { deleteCookie } from 'svelte-cookie'

	export let data

	$userStore = {
		email: '',
		username: '',
		firstName: '',
		lastName: '',
		phone: '',
		token: '',
		roles: []
	}

	let to = data.to

	onMount(() => {

		deleteCookie('token')

		if(to){
			goto(to)
		} else {
			goto('/')
		}
	})
</script>

<svelte:head>
	<title>Güvenli Çıkış</title>
</svelte:head>
