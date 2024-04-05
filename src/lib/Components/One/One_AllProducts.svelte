<script>
	import One_P_Card2 from './One_P_SliderCard2.svelte';


    export let arr = [];


    
</script>

<div class="section-rebrand">
    <div class="container-rebrand-2 grid">
        <div
            id="w-node-_6e2a4034-c748-1ed8-a5e0-818bf891b972-efdfffde"
            class="container-rebrand"
        >
            <div class="w-dyn-list">
                <div role="list" class="collection-list-4 w-dyn-items">
                    {#each arr as obj }
                    <One_P_Card2 obj={obj}></One_P_Card2>
                    {/each}
                    
                </div>
            </div>
        </div>
    </div>
</div>
