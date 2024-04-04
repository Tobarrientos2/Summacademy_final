<script>
	import Three_Button from '../Three/Three_Button.svelte';
    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
    export let arr = [];
	export let bf1 = { v_txt_1, v_txt_2, v_txt_3, v_img, v_src, arr};
</script>

<div
            id="w-node-_5b01936b-a696-7867-6d47-babcbd94ad3b-5875fff3"
            class="container-rebrand"
        >
            <h2 class="heading-2xl-rebrand margin-bot-s-rebrand">
                Estudio Eficaz
                <br>
                Comprensión Profunda
            </h2>
            <p class="paragraph-l-rebrand margin-bot-l-rebrand max-width-400">
                {bf1.v_txt_2}
            </p>
            <Three_Button></Three_Button>
</div>