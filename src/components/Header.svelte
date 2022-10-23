<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input } from 'flowbite-svelte'
	import logo from '$lib/images/netders-logo-blue.svg';
</script>

<header>
	<Navbar let:hidden let:toggle class="shadow-md">
		<NavBrand href="/">
			<img
					src="{logo}"
					class="mr-3 h-6 sm:h-9"
			/>
		</NavBrand>
		<div class="flex md:order-2">
			<Button size="sm">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>

				Hemen başla
			</Button>
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden} class="order-1">
			<NavLi href="/" active={true}>Ana Sayfa</NavLi>
			<NavLi href="/search?a=1&b=2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 inline-block">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				Öğretmen ara
			</NavLi>
			<NavLi href="/detail">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 inline-block">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
				</svg>
				Ders talepleri
			</NavLi>
			<NavLi href="/services">Nasıl çalışır?</NavLi>
			<NavLi href="/pricing">Yardım</NavLi>
			<NavLi href="/contact">İletişim</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
</style>
