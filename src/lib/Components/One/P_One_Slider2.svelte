<script>
	import One_P_SliderCard2 from './One_P_SliderCard2.svelte';
	import One_Card from './One_P_Card.svelte';
  import Swiper from 'swiper'; 

    import { onDestroy, onMount } from 'svelte';

     export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
    export let arr = [];
    
    export let sc1 = {v_txt_1, v_txt_2, v_txt_3, v_img, v_src, arr};
    export let x ;
   

    let swiper;    




    
	



</script>


<div
    id="acne-wrapper"
    class="home-product-wrapper"
    style="opacity: 100; display: block;"
>
    <div
        id="acne-swiper"
        class="home-product-swiper-wrapper w-dyn-list swiper-initialized swiper-horizontal swiper-android swiper-backface-hidd"
    >
        <div
            role="list"
            class="swiper-wrapper product-wrapper-rebrand w-dyn-items"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; cursor: grab;"
        >
            <!-- <One_Card></One_Card> -->
            {#each arr as obj, i}
            {#if obj.v_txt_1 === Number(x.x)}
            <One_P_SliderCard2  obj={obj} ></One_P_SliderCard2>
            {:else if x === ''}
            <One_P_SliderCard2  obj={obj} ></One_P_SliderCard2>
            {/if}
            {/each }
        </div>
    </div>
    <div id="acne-prev" class="home-wrapper-prev swiper-button-disabled"></div>
    <div id="acne-next" class="home-wrapper-next"></div>
    <div
        id="acne-scrollbar"
        class="product-pagination swiper-scrollbar-horizontal"
    >
        <div
            class="swiper-scrollbar-drag acne-combo"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; width: 50px;"
        ></div>
    </div>
</div>


