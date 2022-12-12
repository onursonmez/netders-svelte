<script>
	import { onMount } from 'svelte'
	import { accountModel } from '/src/models/userModel'
	import { mediaCardModel } from '/src/models/commonModel'
	import { gendersStore } from '/src/stores/userStore'
	import { updateUser, getUser } from '/src/repository/user'
	import { getCountries, getCities, getCounties } from '/src/repository/location'
	import { toast } from '/src/functions/toast'
	import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
	import MemberVerticalNavigation from '/src/components/MemberVerticalNavigation.svelte'
	import Select from 'svelte-select';
	import { itemFilter } from '/src/utils/selectUtil'
	import { Tooltip } from 'flowbite-svelte'
	import MediaCardContainer from '/src/components/MediaCardContainer.svelte'

	export let data

	let loading = false
	let cities = []
	let counties = []
	let countries = []

	const handleAccountSubmit = async () => {
		loading = !loading

		let response = await updateUser(accountModel)
		if(response !== undefined){
			toast('Başarılı!', 'success')
		}
		loading = !loading
	}

	const handleAccountValidate = () => {
		if(!accountModel.firstName.trim()) {
			toast('Hata! Adını yazmadın.', 'warning')
		} else {
			return handleAccountSubmit()
		}
	}

	const updateCounties = async () => {
		counties = await getCounties({cityId: accountModel.city.id})
		accountModel.county = null
	}

	onMount( async () => {
		const userResponse = await getUser(data.user.username)
		if(userResponse.result){
			accountModel.firstName = userResponse.result.firstName
			accountModel.lastName = userResponse.result.lastName
			accountModel.email = userResponse.result.email
			accountModel.phone = userResponse.result.phone
			accountModel.gender = userResponse.result.gender
			accountModel.country = userResponse.result.country
			accountModel.city = userResponse.result.city
			accountModel.county = userResponse.result.county

			if(userResponse.result.country){
				accountModel.outsideTurkey = true
			}
		}

		countries = await getCountries()
		cities = await getCities()

		if(accountModel.county !== null){
			counties = await getCounties({cityId: accountModel.city.id})
		}
	})

</script>

<svelte:head>
	<title>Hesabım</title>
</svelte:head>

<MemberHorizontalNavigation />

<div class="flex gap-4 mt-4">

	<div class="min-w-[210px]">
		<MemberVerticalNavigation />
	</div>
	<div class="grow bg-white rounded-lg shadow-md">
		<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Talepleri</div>
		<div class="p-6 flex gap-2 flex-col">
			<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg border">
				<MediaCardContainer data="{mediaCardModel}" />
			</div>
		</div>

	</div>
</div>

