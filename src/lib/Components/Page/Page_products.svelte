<script>
	import One_AllProducts from './../One/One_AllProducts.svelte';
	import One_Hero2 from './../One/One_Hero2.svelte';
	import { getSc } from '$lib/utils/utils';
	import { page } from '$app/stores';
	import { getProductsBySlug, _normalizeFirstSlug } from '$lib/utils/utils';

	let pathnameSplitted = $page.url.pathname;
	pathnameSplitted = pathnameSplitted.split("/")[2];
	pathnameSplitted = _normalizeFirstSlug(pathnameSplitted);


	let sc1 = getSc();



	let arr = getProductsBySlug(sc1.arr, pathnameSplitted);

	

</script>


<One_Hero2 arr={arr} sc1={sc1} category_txt={pathnameSplitted} ></One_Hero2>
<One_AllProducts arr={arr}>
</One_AllProducts>
