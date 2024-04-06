<script>
	import Two_CategoriesH from '../Two/Two_CategoriesH.svelte';

	import P_One_Slider from './P_One_Slider.svelte';
	import P_One_Slider2 from './P_One_Slider2.svelte';
	import Three_CategoriesB from '../Three/Three_CategoriesB.svelte';
	import Two_CategoriesP from '../Two/Two_CategoriesP.svelte';
    import { _categorizeByPrice_arr_txt_o } from '$lib/utils/prices';
    import { filterSlugs, getSc } from '$lib/utils/utils';

    
    let sc1 = getSc();


    let category = filterSlugs(sc1.arr)
    $: console.log(sc1)
  
  


 
    let x = ''
    export function eventReceived(e){
        console.log(e.detail)
        x = e.detail
    } 

    export let type = 2;

</script>

<div class="section-rebrand overflow-hidden">
    <div class="container-rebrand-2 flex-left">
        <Two_CategoriesH></Two_CategoriesH>      
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd3517-5875fff3"
            class="flex-horizontal-rebrand home-product-categories-grid"
        >

           <!-- <Two_CategoriesP></Two_CategoriesP> -->
           {#each category as obj}
           <Three_CategoriesB {obj} ></Three_CategoriesB>
           {/each}
        
          
           
        </div>
        
        {#if type = 1 }
        <P_One_Slider2 {...sc1} x={x} ></P_One_Slider2>
        {:else if type = 2}
        <P_One_Slider2></P_One_Slider2>
        {:else}
        {/if}
        
        <div class="display-none"></div>
    </div>
</div>
