<script>
    import { goto } from "$app/navigation";


    import { denormalizeSlug } from "$lib/utils/utils";
    export let obj = {}

    let denormalizedSlug_txt = denormalizeSlug(obj);


</script>
<!-- When clicking navigate to the slug -->
<a on:click={() => location.href = "/resumenes/"+denormalizedSlug_txt}

class="link-block-3 w-inline-block"
tabindex="0"
><div>Ver Resumenes</div>
<img
    src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/62a1d5703e41184b21eade42_Arrow%20right.svg"
    loading="lazy"
    alt="arrow right"
    class="image-32"
/></a
>



<style>
    .link-block-3{
        cursor: pointer;
    } 
</style>
