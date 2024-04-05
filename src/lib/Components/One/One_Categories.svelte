<script>
	import Two_CategoriesH from '../Two/Two_CategoriesH.svelte';

	import P_One_Slider from './P_One_Slider.svelte';
	import P_One_Slider2 from './P_One_Slider2.svelte';
	import Three_CategoriesB from '../Three/Three_CategoriesB.svelte';
	import Two_CategoriesP from '../Two/Two_CategoriesP.svelte';
    import { _categorizeByPrice_arr_txt_o } from '$lib/utils/prices';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
    export let arr = [];
    export let sc1 = {v_txt_1, v_txt_2, v_txt_3, v_img, v_src, arr};
    
  
    export function filterByPrice(arr_obj_i){
        let arr_obj_o = [];
        let prices_arr_obj = _categorizeByPrice_arr_txt_o(arr);
        for (let i = 0; i < prices_arr_obj.length; i++){
            let price_txt = prices_arr_obj[i];
            let price_obj = {price: price_txt, arr: []};
            arr_obj_o.push(price_obj);

            for (let j = 0; j < arr_obj_i.length; j++){
                let obj = arr_obj_i[j];
                if(obj.v_txt_1 == price_txt){
                    price_obj.arr.push(obj);
                } 
            } 
        }

        return arr_obj_o;
        
    }


 
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
<!-- 
           <Two_CategoriesP></Two_CategoriesP>
           {#each filterByPrice(arr) as obj}
           <Three_CategoriesB on:categoryChanged={eventReceived} {obj} ></Three_CategoriesB>
           {/each}
         -->
          
           
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
