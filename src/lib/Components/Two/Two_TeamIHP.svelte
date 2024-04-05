<script>
    export let obj = {};
</script>

<div class="medical-team-card-rebrand v2">
    <img
        src={obj.v_img}
        loading="lazy"
        alt=""
        class="medical-team-image-rebrand v2"
    />
    <div class="medical-team-text-div-rebrand v2">
        <p
            class="heading-xs-rebrand font-weight-600 margin-bot-xxs-rebrand"
            data-svelte-h="svelte-10vm6b9"
        >
            {obj.v_txt_1}
        </p>
        <p class="paragraph-s-rebrand" data-svelte-h="svelte-1gj8njv">
            {obj.v_txt_2}
        </p>
    </div>
</div>
