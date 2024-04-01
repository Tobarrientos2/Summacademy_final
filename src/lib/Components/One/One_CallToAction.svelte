<script>
	import Two_CallToActionImage from '../Two/Two_CallToAction.svelte';
	import Three_CallToActionImage from './../Three/Three_CallToActionImage.svelte';
    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>


<div id="cta-get-started" class="section-rebrand prefooter-section v2">
    <Three_CallToActionImage></Three_CallToActionImage>
    <Two_CallToActionImage></Two_CallToActionImage>
</div>
