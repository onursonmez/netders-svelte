<script>
    import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
    import MemberVerticalNavigation from '/src/components/MemberVerticalNavigation.svelte'
</script>

<MemberHorizontalNavigation />

<div class="flex flex-col lg:flex-row gap-4 mt-4">
    <div class="min-w-[220px]">
        <div class="hidden lg:block">
            <MemberVerticalNavigation />
        </div>
    </div>

    <slot />
</div>

