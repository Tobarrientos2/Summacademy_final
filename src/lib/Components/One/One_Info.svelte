<script>
	import Two_Info2 from './../Two/Two_Info2.svelte';
	import Two_Info from './../Two/Two_Info.svelte';
	import Three_InfoImage from './../Three/Three_InfoImage.svelte';
    
    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<section class="section-rebrand">
    <div class="container-rebrand-2">
        <div class="how-software-works-top-wrapper">
            <Three_InfoImage></Three_InfoImage>
            <Two_Info></Two_Info>
        </div>
        <div class="how-software-works-bot-wrapper">
            <Two_Info2></Two_Info2> 
            <Two_Info2></Two_Info2> 
            <Two_Info2></Two_Info2> 
            <Two_Info2></Two_Info2> 
        </div>
    </div>
</section>
