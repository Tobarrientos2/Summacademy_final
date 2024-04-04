<script>
    import { objStore } from "$lib";
    import { onDestroy, onMount } from "svelte";
     export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
    export let obj = {};

   
console.log(obj)

    

</script>


{#if Object.keys(obj).length > 0}
<div class="new-tag-v2-2 margin-bot-xxs-rebrand w-condition-invisible">NEW</div>
<h1 id="product-name" class="heading-xl-rebrand margin-bot-xxs-rebrand">
    {obj.v_txt_2}
</h1>
<p class="heading-xs-rebrand margin-bot-xs-rebrand">
    {obj.v_txt_3}
</p>
{/if}
