<script>
	import Two_CartRecommendations2 from '../Two/Two_CartRecommendations2.svelte';
	import Two_CartRecommendations from '../Two/Two_CartRecommendations.svelte';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<div id="empty-recommended-cart" class="recommended-in-cart empty-state">
    <Two_CartRecommendations></Two_CartRecommendations>
    <div role="list" class="w-dyn-items">
        <Two_CartRecommendations2></Two_CartRecommendations2>
        <Two_CartRecommendations2></Two_CartRecommendations2>
    </div>
</div>
