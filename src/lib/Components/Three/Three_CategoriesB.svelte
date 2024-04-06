<script lang="ts">
   export let obj = {};
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    function sendEvent(){
        dispatch('categoryChanged', {
            x: obj
        })
        console.log("Event Sent")
    } 
</script>

<button on:click={() => sendEvent()}
    class="home-product-categories-button _w-border w-node-_7e2ac3e0-eae8-de91-94e8-ea5151fd351a-5875fff3"
>
    {obj}
</button>
