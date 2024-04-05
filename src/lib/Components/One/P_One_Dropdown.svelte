<script>
    import Three_P_DropdownL from "../Three/Three_P_DropdownL.svelte";
    import Two_P_DropdownHP from "../Two/Two_P_DropdownHP.svelte";
    import Three_P_DropdownI from "../Three/Three_P_DropdownI.svelte";
    import { getSc } from "$lib/utils/utils";
    import { filterSlugs, denormalizeSlug } from "$lib/utils/utils";

    // Here we are getting the sc objects
    let sc1 = getSc();
    // Here we are storing the categories_arr 
    let categories_arr = filterSlugs(sc1.arr);




</script>

<div
    data-hover="false"
    data-delay="250"
    class="nav-dropdown-wrapper-v3 w-dropdown"
>
    <div
        id="nav-dropdown"
        class="nav-dropdown-toggle-v3 w-dropdown-toggle"
        aria-controls="w-dropdown-list-0"
        aria-haspopup="menu"
        aria-expanded="false"
        role="button"
        tabindex="0"
    >
        <div class="nav-dropdown-underline-wrapper-rebrand v3">
            <div
                class="nav-dropdown-underline-rebrand v3 position-left-absolute"
            ></div>
            <div>Resumenes</div>
            <img
                src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/643c8bc6388272e37ae8d04b_Navbar%20v3%20Arrow.svg"
                loading="lazy"
                alt="arrow down"
                class="nav-v3-dropdown-image-arrow"
            />
        </div>
    </div>
    <nav
        class="navbar-v3-dropdown-list w-dropdown-list"
        id="w-dropdown-list-0"
        aria-labelledby="nav-dropdown"
    >
        <div
            class="nav-v3-dropdown-list-wrapper"
            style="transform: translate3d(0px, -330px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
        >
            <div class="nav-dropdown-list-content v3">
                <div
                    id="w-node-_6d2df4e9-f08a-9dc6-bd59-5c4ff4085b3e-f4085b13"
                    class="div-block-25"
                >
                <div class="nav-content-grid-v3">
                        {#each categories_arr as obj}
                        <div
                            id="w-node-_6d2df4e9-f08a-9dc6-bd59-5c4ff4085b40-f4085b13"
                            class="container-rebrand"
                        >
                            <Two_P_DropdownHP obj={obj}></Two_P_DropdownHP>
                           <Three_P_DropdownL obj={obj}></Three_P_DropdownL>
                        </div>
                        {/each}
                    </div>
                </div>
                <!-- <Three_P_DropdownI></Three_P_DropdownI> -->
            </div>
        </div>
        <div
            id="bg-grey-nav"
            fs-mirrorclick-element="trigger"
            class="nav-v3-grey-bg"
        ></div>
    </nav>
</div>


<style>
    .w-dropdown{
        margin-left: 0;
    } 
</style>