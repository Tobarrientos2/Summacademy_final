<script>
	import P_One_ProductImageSlider from './P_One_ProductImageSlider.svelte';
	import Three_P_ProductImageI2 from './../Three/Three_P_ProductImageI2.svelte';
	import Three_P_ProductImageI from '../Three/Three_P_ProductImageI.svelte';
    export let obj = {};
</script>

<div
    id="w-node-_833db64b-e300-fbdb-1b95-c569411a7534-15b68dda"
    class="container-rebrand no-padding-sides"
>
    <div class="bundle-swiper-wrapper vertical margin-bot-xs-rebrand">
        <div
            id="gallery-swiper"
            class="breakout-hero-gallery-swiper-wrapper hero-gallery-v2 w-dyn-list swiper-initialized swiper-horizontal swiper-android swiper-backface-hidden"
        >
            <script
                type="text/x-wf-template"
                id="wf-template-10ca20aa-9eeb-d116-21f3-5f8a21c735b9"
            >
%3Cdiv%20role%3D%22listitem%22%20class%3D%22swiper-slide%20breakout-gallery-slide%20height-592%20w-dyn-item%20w-dyn-repeater-item%22%3E%3Cimg%20loading%3D%22eager%22%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy.webp%22%20sizes%3D%22(max-width%3A%20479px)%2040px%2C%20(max-width%3A%20767px)%208vw%2C%20592px%22%20srcset%3D%22https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-500.webp%20500w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-800.webp%20800w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-1080.webp%201080w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy.webp%201184w%22%20class%3D%22image-full%20cover%22%2F%3E%3C%2Fdiv%3E
            </script>
            <div
                role="list"
                class="swiper-wrapper w-dyn-items"
                style="transform: translate3d(-592px, 0px, 0px); transition-duration: 0ms;"
            >
             
                
            <Three_P_ProductImageI2 obj={obj}></Three_P_ProductImageI2>
            <Three_P_ProductImageI2 obj={obj}></Three_P_ProductImageI2>
                
             
            </div>
            <div class="w-dyn-hide w-dyn-empty">
                <div>No items found.</div>
            </div>
        </div>
<!-- 
        <P_One_ProductImageSlider></P_One_ProductImageSlider> -->

    </div>
</div>
