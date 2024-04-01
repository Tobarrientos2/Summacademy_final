<script>
    import { onMount } from "svelte";
	import Three_HeroSlider from './../Three/Three_HeroSlider.svelte';
    import ThreeGifHero from "../Three/Three_GifHero.svelte";
	import Two_Hero from "./../Two/Two_Hero.svelte";

	export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
	export let arr = [];
	export let bf1 = {v_txt_1, v_txt_2, v_txt_3, v_img, v_src};

</script>

<div class="section-rebrand bg-beige-100">
	<div class="container-rebrand-2 grid">
		<div
			id="subhero-swiper"
			class="home-subhero-swiper-wrapper v2---home w-node-aaa1567c-15d2-3e9c-79e4-1f26bea3423f-5875fff3 swiper-initialized swiper-horizontal swiper-android swiper-watch-progress swiper-backface-hidden"
		>
			<div
				class="swiper-wrapper subhero-swiper"
				id="swiper-wrapper-07d8f6cd10775cf35"
				aria-live="off"
				style="transform: translate3d(-592px, 0px, 0px); transition-duration: 0ms;"
			>
				{#each arr.slice(1,4) as obj}
				<Three_HeroSlider obj={obj}></Three_HeroSlider>
				{/each}
			</div>
			<span
				class="swiper-notification"
				aria-live="assertive"
				aria-atomic="true"
			></span>
		</div>
		<div
			id="w-node-f9f475e4-f23e-3a1d-10d1-412d8baaac93-5875fff3"
			class="subhero-arrows home"
		>
			<div
				id="hero-prev"
				class="home-wrapper-prev v2--home w-node-_5303bce6-1df2-2be8-66f4-c321d1c5ff3a-5875fff3"
				tabindex="0"
				role="button"
				aria-label="Previous slide"
				aria-controls="swiper-wrapper-07d8f6cd10775cf35"
				aria-disabled="false"
			></div>
			<div
				id="hero-next"
				class="home-wrapper-next v2---home w-node-_487bf505-3d85-cbe2-818a-9d29bf640e3c-5875fff3"
				tabindex="0"
				role="button"
				aria-label="Next slide"
				aria-controls="swiper-wrapper-07d8f6cd10775cf35"
				aria-disabled="false"
			></div>
		</div>
		<Two_Hero {...bf1}></Two_Hero>
	</div>
	<!-- <ThreeGifHero number={1}></ThreeGifHero> -->
	<!-- <ThreeGifHero number={2}></ThreeGifHero> -->
	<!-- <ThreeGifHero number={3}></ThreeGifHero>   -->
</div>
