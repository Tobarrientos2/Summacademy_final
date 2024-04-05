<script>
	import Three_Hero2I from './../Three/Three_Hero2I.svelte';
    export let arr = [];
    export let category_txt = "";
    export let sc1 = {}


</script>

<div class="section-rebrand bg-beige-100 overflow-hidden margin-48">
    <div class="container-rebrand-2 grid">
        <!-- <div
            id="w-node-f85a6c73-6f96-9aca-cc42-6f257393a956-efdfffde"
            class="container-rebrand"
        >
            <div class="breadcrumbs-wrapper">
                <a href="/" class="link-text-breadcrumbs">Home</a>
                <div class="text-breadcrumbs">/</div>
                <a href="/shop-all" class="link-text-breadcrumbs">Shop all</a>
                <div class="text-breadcrumbs">/</div>
                <div class="text-breadcrumbs is-bold">Acne products</div>
            </div>
        </div> -->
        <div
            id="w-node-_5972e0f5-3a76-3a4d-2a50-03b4f6007f0c-efdfffde"
            class="container-rebrand gap-rows-16"
        >
            <h1 class="heading-2xl-rebrand">{category_txt}</h1>
            <p class="heading-xs-rebrand">
                {sc1.v_txt_2}
            </p>
        </div>
        <div
            id="w-node-_3b80b479-cc54-d966-21f0-6ce1db15cc4b-efdfffde"
            class="container-rebrand"
        >
           <Three_Hero2I></Three_Hero2I>
        </div>
    </div>
</div>
