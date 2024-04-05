<script>
	import One_Questions from './../lib/../../Components/One/One_Questions.svelte';
	import One_Team from './../lib/../../Components/One/One_Team.svelte';
	import One_Grid from '../One/One_Grid.svelte';
	import One_Benefits from './../lib/../../Components/One/One_Benefits.svelte';
	import One_Brands from './../lib/../..//Components/One/One_Brands.svelte';
    import One_Hero from '../lib/../..//Components/One/One_Hero.svelte';
    import One_Categories from '../lib/../..//Components/One/One_Categories.svelte';
    import One_CallToAction from '$lib/Components/One/One_CallToAction.svelte';
    import { onMount } from 'svelte';

    import { getSc } from '$lib/utils/utils';
    import { getEx } from '$lib/utils/utils';
    import { getBf } from '$lib/utils/utils';
    import { getTm } from '$lib/utils/utils';

</script>


<main class="main-wrapper-rebrand homepage-overflow-none">
    <One_Hero {...getBf()}></One_Hero>
    <!-- <One_Brands></One_Brands> -->
    <One_Categories {...getSc()} type={1}></One_Categories>
    <One_Benefits bf1={getBf()}></One_Benefits>
    <!-- <One_Grid></One_Grid> -->
    <One_Team tm1={getTm()}></One_Team>
    <!-- <One_Questions></One_Questions> -->
    <!-- <One_CallToAction></One_CallToAction> -->
</main>