<script>
    import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
    import MemberVerticalNavigation from '/src/components/MemberVerticalNavigation.svelte'
    import UserImageUpload from '/src/components/UserImageUpload.svelte'
    import { page } from '$app/stores';
</script>

<MemberHorizontalNavigation />

<div class="flex flex-col lg:flex-row gap-4 mt-4">
    <div class="min-w-[220px]">
        <div class="hidden lg:block">
            <UserImageUpload />
            <p class="text-center mt-2 font-semibold">{$page.data.user.firstName} {$page.data.user.lastName}</p>
        </div>

        <div class="hidden lg:block">
            <MemberVerticalNavigation />
        </div>
    </div>

    <slot />
</div>

