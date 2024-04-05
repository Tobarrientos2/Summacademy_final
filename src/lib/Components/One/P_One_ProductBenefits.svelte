<script>
	import Two_ProductBenefitsHP from '../Two/Two_P_ProductBenefitsHP.svelte';
    import Two_P_ProductBenefitsP from "../Two/Two_P_ProductBenefitsP.svelte";
    import { getBf } from '$lib/utils/utils';
    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';

</script>

<div class="div-block-108 width-100">
    
   <Two_ProductBenefitsHP bf1={getBf()}></Two_ProductBenefitsHP>
    <div
        class="rich-text-what-s-not-to-love no-padding-left margin-bot-l-rebrand text-color-black mobile-16 product-page w-richtext"
    >
        <ul role="list">
            {#each getBf().arr.splice(0,3) as obj }
            <Two_P_ProductBenefitsP obj={obj}></Two_P_ProductBenefitsP>
            {/each }
        </ul>
    </div>
    <div class="heading-s-rebrand font-weight-600 margin-bot-xs-rebrand">
     
    </div>
</div>
