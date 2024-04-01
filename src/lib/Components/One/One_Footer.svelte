<script>
	import Three_Link2 from './../Three/Three_Link2.svelte';
	import Three_Logo from './../Three/Three_Logo.svelte';
	import Three_SocialIcon from './../Three/Three_SocialIcon.svelte';
	import Two_Footer2 from './../Two/Two_Footer2.svelte';
	import Two_Footer from './../Two/Two_Footer.svelte';
    import Two_Footer3 from './../Two/Two_Footer3.svelte';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<div class="footer sos-not-scroll">
    <div class="container-rebrand-2 grid static">
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17bb-e0cb17b9"
            class="container-rebrand footer-flex justify-endtoend"
        >
            <Three_Logo></Three_Logo>
            <div
                class="footer-socialmedia-wrapper flex-horizontal-rebrand margin-bot-48"
            >
                <Three_SocialIcon></Three_SocialIcon>
                <Three_SocialIcon></Three_SocialIcon>
                <Three_SocialIcon></Three_SocialIcon>
            </div>
           
        </div>
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17c5-e0cb17b9"
            class="container-rebrand"
        >
            <Two_Footer></Two_Footer>
            <div class="div-block-30">
                <Two_Footer2></Two_Footer2>
                <Two_Footer2></Two_Footer2>
                <Two_Footer2></Two_Footer2>
            </div>
        </div>
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17d7-e0cb17b9"
            class="container-rebrand footer-grid margin-top-xs flex-layout-left"
        >
         <Two_Footer3></Two_Footer3>
         <Two_Footer3></Two_Footer3>
         <Two_Footer3></Two_Footer3>
        </div>
        
       
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17e5-e0cb17b9"
            class="footer-devider"
        ></div>
        <div
            id="w-node-_6c445a4a-c101-03db-9a87-a31ce0cb17e6-e0cb17b9"
            class="privacy-policy-wrapper max-width-100 flex-horizontal-center"
        >
            <Three_Link2 bar={true}></Three_Link2>
            <Three_Link2 bar={true}></Three_Link2>
            <Three_Link2 bar={false}></Three_Link2>

            
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
