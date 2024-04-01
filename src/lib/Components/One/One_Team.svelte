<script>
	import Two_Team3 from './../Two/Two_Team3.svelte';
	import Two_Team2 from './../Two/Two_Team2.svelte';
	import Two_Team from './../Two/Two_Team.svelte';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';

</script>

<div class="section-rebrand overflow-hidden margin-bot-desktop-128">
    <div class="container-rebrand-2 doctors-container">
        <div
            id="w-node-_025fa836-9cb0-f235-4e5d-06b0cc8f83c0-cc8f83be"
            class="container-rebrand doctors-column v2"
        >
            <Two_Team></Two_Team>
            <Two_Team2></Two_Team2>
            <Two_Team2></Two_Team2>
            <Two_Team2></Two_Team2>
            
        </div>
        <div
            id="w-node-_025fa836-9cb0-f235-4e5d-06b0cc8f83f2-cc8f83be"
            class="doctors-scroll-overall"
        >
            <div class="doctors-scroll-control">
                <div class="flex-horizontal-rebrand align-stretch mobile-top">
                 <Two_Team3></Two_Team3>
                 <Two_Team3></Two_Team3>
                 <Two_Team3></Two_Team3>
                </div>
            </div>
        </div>
    </div>
</div>
