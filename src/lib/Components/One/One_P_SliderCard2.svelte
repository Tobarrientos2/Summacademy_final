<script>
	import Three_Card2Image from '../Three/Three_Card2Image.svelte';
	import Two_Card2Paragraph from '../Two/Two_Card2Paragraph.svelte';
	import Three_Card2Button from '../Three/Three_Card2Button.svelte';
	import Two_Card2Includes from '../Two/Two_Card2Includes.svelte';
	import Two_Card2Heading from '../Two/Two_Card2Heading.svelte';
	import Two_Card2Prices from '../Two/Two_Card2Prices.svelte';
    import { writable } from 'svelte/store';
    import { objStore } from '$lib';



    export let obj = {};

    
    
    function handleClick(){
        sessionStorage.setItem('obj', JSON.stringify(obj))
        objStore.set(obj);
    }

  
</script>

<div
                role="listitem"
                class="swiper-slide home-product w-dyn-item swiper-slide-next"
                style="width: 280px; margin-right: 16px;"
            >
                <a   on:click={handleClick}
                on:click={() => location.href = obj.v_slug}
                    class="product-cards-wrapper height-auto w-inline-block"
                    ><div
                        id="products-cards"
                        data-w-id="5cac4a41-a1ab-ba2a-44ee-6bd9c63c0833"
                        class="product-cards-wrapper"
                    >
                        <div class="products-cards-text-wrapper">
                           <Three_Card2Image {obj}></Three_Card2Image>
                            <div class="text-product-wrapper">
                                <Two_Card2Heading {obj}></Two_Card2Heading>
                                <Two_Card2Prices {obj}></Two_Card2Prices>
                                <Two_Card2Paragraph {obj}></Two_Card2Paragraph>
                               <Two_Card2Includes {obj}></Two_Card2Includes>
                            </div>
                        </div>
                       <Three_Card2Button></Three_Card2Button>
                    </div>
                    </a
                >
            </div>



            