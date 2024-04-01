<script>
	import Two_Benefits2 from './../Two/Two_Benefits2.svelte';
	import Two_Benefits from './../Two/Two_Benefits.svelte';
    import Two_Benefits3 from './../Two/Two_Benefits3.svelte';
    import ThreeButton3 from '../Three/Three_Button3.svelte';


    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>


<section class="section-rebrand bg-black">
    <div class="container-rebrand-2 grid">
        <Two_Benefits></Two_Benefits>
        <Two_Benefits2></Two_Benefits2>
        <ThreeButton3></ThreeButton3>
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37b8-5875fff3"
            class="ingredients-swiper-wrapper-home"
        >
            <div
                id="ingredients-swiper"
                class="home-ingredients-swiper w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37b9-5875fff3"
            >
                <div
                    id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37ba-5875fff3"
                    class="swiper-wrapper ingredients-home"
                >
                 <Two_Benefits3></Two_Benefits3>
                 <Two_Benefits3></Two_Benefits3>
                 <Two_Benefits3></Two_Benefits3>
                 <Two_Benefits3></Two_Benefits3>
                 <Two_Benefits3></Two_Benefits3>

                </div>
            </div>
            <div
                id="ingredients-prev"
                class="home-wrapper-prev ingredients-mobile"
            ></div>
            <div
                id="ingredients-next"
                class="home-wrapper-next ingredients-mobile"
            ></div>
        </div>
    </div>
</section>
