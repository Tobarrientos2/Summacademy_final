<script>
    import { denormalizeSlug } from "$lib/utils/utils";
    export let obj = {};


    let denormalizedSlug_txt = denormalizeSlug(obj);


</script>
<a on:click={() => location.href = "/resumenes/"+denormalizedSlug_txt}
    style="cursor:pointer"
class="footer-link-text">{obj}</a>

<style>
    .footer-link-text {
    color: #fff;
    font-size: 18px;
    line-height: 120%;
    text-decoration: none;
    white-space: nowrap;
}
</style>
