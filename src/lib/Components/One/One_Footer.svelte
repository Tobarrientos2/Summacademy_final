<script>
	import Two_FooterH from './../Two/Two_FooterH.svelte';
    import Three_FooterI from '../Three/Three_FooterI.svelte';
	import Three_FooterS from '../Three/Three_FooterS.svelte';
	import Three_FooterL from '../Three/Three_FooterL.svelte';
    import Three_FooterL2 from './../Three/Three_FooterL2.svelte';
	import Three_HeaderL2 from './../Three/Three_HeaderL2.svelte';
    import { filterSlugs } from '$lib/utils/utils';
    import { getTm } from '$lib/utils/utils';

    import { getSc } from '$lib/utils/utils';
    
    let tm1 = getTm();

    let sc1 = getSc();

    let categories_arr = filterSlugs(sc1.arr);
   
</script>

<div class="footer sos-not-scroll">
    <div class="container-rebrand-2 grid static">
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17bb-e0cb17b9"
            class="container-rebrand footer-flex justify-endtoend"
        >
            <Three_FooterI {tm1}></Three_FooterI>
            <div
                class="footer-socialmedia-wrapper flex-horizontal-rebrand margin-bot-48"
            >
                <!-- <Three_FooterS></Three_FooterS>
                <Three_FooterS></Three_FooterS>
                <Three_FooterS></Three_FooterS> -->
            </div>
           
        </div>
        <div
        id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17c5-e0cb17b9"
        class="container-rebrand"
        >
        <Two_FooterH ></Two_FooterH>
        <div class="div-block-30">
            {#each categories_arr as obj}
            <Three_FooterL2 {obj}></Three_FooterL2>
            {/each}
         
            <!-- Two_FooterH -->
        </div>
    </div>
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17d7-e0cb17b9"
            class="container-rebrand footer-grid margin-top-xs flex-layout-left"
        >
       
        </div>
        
       
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17e5-e0cb17b9"
            class="footer-devider"
        ></div>
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17e6-e0cb17b9"
            class="privacy-policy-wrapper max-width-100 flex-horizontal-center"
        >

            <!-- <Three_FooterL bar={true}></Three_FooterL>
            <Three_FooterL bar={true}></Three_FooterL>
            <Three_FooterL bar={false}></Three_FooterL>

             -->
        </div>
        <div
            id="w-node-_153812fb-473f-6c51-abf1-5f340e1130dc-e0cb17b9"
            class="legit-script-wrapper"
        >
            <div
                id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17f1-e0cb17b9"
                class="legit-script-embed show-mobile zero-padding w-embed w-script"
            >
                <script
                    src="https://static.legitscript.com/seals/7433514.js"
                ></script><a
                    href="https://legitscript.com"
                    target="_blank"
                    title="Verify LegitScript Approval"
                    ><img
                        src="https://static.legitscript.com/seals/7433514.png"
                        alt="LegitScript approved"
                        width="140"
                        height="120"
                        border="0"
                    /></a
                >

                <style>
                    div.legit-script-embed > a > img {
                        width: 100%;
                        height: 100%;
                    }
                </style>
            </div>
        </div>
    </div>
</div>


<style>
    /* #w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17c5-e0cb17b9{
        grid-area: auto;
    }  */
</style>