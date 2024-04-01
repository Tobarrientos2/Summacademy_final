<script>
	import Three_Link from '../Three/Three_Button4.svelte';
	import Three_Button4 from '../Three/Three_Link.svelte';
	import Two_Questions3 from './../Two/Two_Questions3.svelte';
	import Two_Questions2 from './../Two/Two_Questions2.svelte';
	import Two_Questions from './../Two/Two_Questions.svelte';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';

</script>

<div class="section-rebrand bg-beige-100">
    <div class="container-rebrand-2 grid">
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd385a-5875fff3"
            class="container-rebrand no-padding-sides-2"
        >
           <Two_Questions></Two_Questions>
            <Two_Questions2></Two_Questions2>
        </div>
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd3866-5875fff3"
            class="container-rebrand no-padding-sides-2"
        >
            <Two_Questions3></Two_Questions3>
            <Two_Questions3></Two_Questions3>
            <Two_Questions3></Two_Questions3>
            <Two_Questions3></Two_Questions3>

           
            <div class="flex-horizontal-rebrand justify-end">
                <Three_Button4></Three_Button4>
                <Three_Link></Three_Link>
            </div>
        </div>
    </div>
</div>
