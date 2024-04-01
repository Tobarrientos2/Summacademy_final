<script >
	import One_Card2 from './One_Card2.svelte';
	import One_Card from './One_Card.svelte';

     export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
    export let arr = [];
    export let sc1 = {v_txt_1, v_txt_2, v_txt_3, v_img, v_src, arr};
    export let x = '' ;

    $: console.log(x.x)
    $: console.log(x.x === '6000' ? true :false)


</script>


<div
    id="acne-wrapper"
    class="home-product-wrapper"
    style="opacity: 100; display: block;"
>
    <div
        id="acne-swiper"
        class="home-product-swiper-wrapper w-dyn-list swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden"
    >
        <div
            role="list"
            class="swiper-wrapper product-wrapper-rebrand w-dyn-items"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms; cursor: grab;"
        >
            <!-- <One_Card></One_Card> -->
            {#each arr as obj}
            {#if obj.v_txt_1 === Number(x.x)}
            <One_Card2  obj={obj} ></One_Card2>
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
