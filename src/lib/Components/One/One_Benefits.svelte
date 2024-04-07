<script>
	import Two_BenefitsP from '../Two/Two_BenefitsP.svelte';
	import Two_BenefitsH from '../Two/Two_BenefitsH.svelte';
    import Two_BenefitsIHP from '../Two/Two_BenefitsIHP.svelte';
    import Three_BenefitsB from '../Three/Three_BenefitsB.svelte';


    export let bf1 = {};
</script>


<section class="section-rebrand bg-black">
    <div id="swiper-container" class="container-rebrand-2 grid">
        <Two_BenefitsH obj={bf1}></Two_BenefitsH>
        <Two_BenefitsP obj={bf1}></Two_BenefitsP>
        <!-- <Three_BenefitsB></Three_BenefitsB> -->
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37b8-5875fff3"
            class="ingredients-swiper-wrapper-home "
        >
            <div
                id="swiper-container"
                class="home-ingredients-swiper w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37b9-5875fff3"
            >
                <div
                    id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd37ba-5875fff3"
                    class="swiper-wrapper ingredients-home s-wrapper"
                >
                {#each bf1.arr.splice(3,9) as obj}
                <Two_BenefitsIHP obj={obj}></Two_BenefitsIHP>
               
                {/each}
                
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
