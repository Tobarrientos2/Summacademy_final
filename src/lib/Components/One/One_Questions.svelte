<script>
	import Three_QuestionsB from '../Three/Three_QuestionsB.svelte';
	import Three_QuestionsP from '../Three/Three_QuestionsP.svelte';
	import Two_QuestionsD from '../Two/Two_QuestionsD.svelte';
	import Two_QuestionsIHP from '../Two/Two_QuestionsIHP.svelte';
	import Two_QuestionsHP from '../Two/Two_QuestionsHP.svelte';

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
           <Two_QuestionsHP></Two_QuestionsHP>
            <Two_QuestionsIHP></Two_QuestionsIHP>
        </div>
        <div
            id="w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd3866-5875fff3"
            class="container-rebrand no-padding-sides-2"
        >
            <Two_QuestionsD></Two_QuestionsD>
            <Two_QuestionsD></Two_QuestionsD>
            <Two_QuestionsD></Two_QuestionsD>
            <Two_QuestionsD></Two_QuestionsD>

           
            <div class="flex-horizontal-rebrand justify-end">
                <Three_QuestionsP></Three_QuestionsP>
                <Three_QuestionsB></Three_QuestionsB>
            </div>
        </div>
    </div>
</div>
