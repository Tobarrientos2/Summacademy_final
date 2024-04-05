<script>
    export let obj = {}
</script>

<div
    role="listitem"
    class="swiper-slide breakout-gallery-slide height-592 w-dyn-item w-dyn-repeater-item swiper-slide-next"
    data-swiper-slide-index="1"
    style="width: 592px;"
>
    <img
        loading="eager"
        alt=""
        src={obj.v_img}
        sizes="(max-width: 479px) 40px, (max-width: 767px) 8vw, 592px"
        srcset={obj.v_img}
        class="image-full cover"
    />
</div>
