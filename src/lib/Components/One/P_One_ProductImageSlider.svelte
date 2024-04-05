<script>
    import Three_P_ProductImageI from "./../Three/Three_P_ProductImageI.svelte";
    
</script>

<div
    id="thumb-swiper"
    class="breakout-hero-thumb-swiper-wrapper v2 w-dyn-list swiper-initialized swiper-horizontal swiper-android swiper-watch-progress swiper-backface-hidden swiper-thumbs"
>
    <script
        type="text/x-wf-template"
        id="wf-template-f62d4f7b-eb35-91fc-c632-cc172727072a"
    >
%3Cdiv%20role%3D%22listitem%22%20class%3D%22swiper-slide%20breakout-thumbnail%20v2%20radius-8%20w-dyn-item%20w-dyn-repeater-item%22%3E%3Cimg%20loading%3D%22eager%22%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy.webp%22%20sizes%3D%22(max-width%3A%20479px)%2046px%2C%20(max-width%3A%20767px)%20138px%2C%20185px%22%20srcset%3D%22https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-500.webp%20500w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-800.webp%20800w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy-p-1080.webp%201080w%2C%20https%3A%2F%2Fassets-global.website-files.com%2F5f3a15a0ecda61980f49ff52%2F64c357c9686438dbe481060c_Hero%2520Image%2520copy.webp%201184w%22%20class%3D%22image-full%20cover%22%2F%3E%3C%2Fdiv%3E
    </script>
    <div
        role="list"
        class="swiper-wrapper w-dyn-items"
        style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
    >
        <!-- each -->
        <Three_P_ProductImageI></Three_P_ProductImageI>
    </div>
    <div class="w-dyn-hide w-dyn-empty">
        <div>No items found.</div>
    </div>
</div>
<div id="thumb-arrow-prev-slide" class="product-swiper-button">
    <img
        src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/62a1d57130bd39736f086226_Arrow%20Left.svg"
        loading="lazy"
        alt="arrow left"
        class="product-swiper-arrow"
    />
</div>
<div id="thumb-arrow-next-slide" class="product-swiper-button right">
    <img
        src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/62a1d5703e41184b21eade42_Arrow%20right.svg"
        loading="lazy"
        alt="arrow right"
        class="product-swiper-arrow right"
    />
</div>
