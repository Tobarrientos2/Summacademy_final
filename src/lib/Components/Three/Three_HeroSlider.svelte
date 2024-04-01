<script>
    export let v_txt_1 = "v_txt_1";
    export let v_txt_2 = "v_txt_2";
    export let v_txt_3 = "v_txt_3";
    export let v_img = "v_img";
    export let v_src = "v_src";
    export let obj = {};

    </script>
{#if obj != undefined}
<div
    class="swiper-slide subhero-swiper swiper-slide-prev"
    role="group"
    aria-label="1 / 3"
    style="width: 592px;"
>
    <img
        src={obj.v_img}
        loading="eager"
        alt=""
        class="image-rebrand subhero-swiper"
    />
</div>
{/if}
