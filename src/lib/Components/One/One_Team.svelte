<script>
	import Two_TeamIHP from '../Two/Two_TeamIHP.svelte';
	import Two_TeamP from '../Two/Two_TeamP.svelte';
	import Two_TeamHP from '../Two/Two_TeamHP.svelte';

   export let tm1 = {}

</script>

<div class="section-rebrand overflow-hidden margin-bot-desktop-128">
    <div class="container-rebrand-2 doctors-container">
        <div
            id="w-node-_025fa836-9cb0-f235-4e5d-06b0cc8f83c0-cc8f83be"
            class="container-rebrand doctors-column v2"
        >
            <Two_TeamHP tm1={tm1}></Two_TeamHP>

            {#each tm1.arr as obj}
            <Two_TeamP obj={obj}></Two_TeamP>
            {/each}
            
            
        </div>
        <div
            id="w-node-_025fa836-9cb0-f235-4e5d-06b0cc8f83f2-cc8f83be"
            class="doctors-scroll-overall"
        >
            <div class="doctors-scroll-control">
                <div class="flex-horizontal-rebrand align-stretch mobile-top">
                    {#each tm1.arr as obj}
                    <Two_TeamIHP obj={obj}></Two_TeamIHP>
                    {/each}
                 
                </div>
            </div>
        </div>
    </div>
</div>
