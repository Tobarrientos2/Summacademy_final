<script>
	import P_One_ProductImage from './P_One_ProductImage.svelte';
    import Two_Card2Prices from "./../Two/Two_Card2Prices.svelte";
    import P_One_ProductRecomendation from "./P_One_ProductRecomendation.svelte";
    import P_One_ProductBenefits from "./P_One_ProductBenefits.svelte";
    import Three_ProductB from "../Three/Three_ProductB.svelte";
    import Three_ProductC from "../Three/Three_ProductC.svelte";
    import P_One_Navigator from "./P_One_Navigator.svelte";
    import Two_ProductHP from "../Two/Two_ProductHP.svelte";
    import { onDestroy, onMount } from 'svelte';

    export let v_txt_1 = "v_txt_1";
    export let v_txt_2 = "v_txt_2";
    export let v_txt_3 = "v_txt_3";
    export let v_img = "v_img";
    export let v_src = "v_src";
    export let obj = {};
    

    onMount(() => {
        if (typeof window !== "undefined" && window.sessionStorage) {
            obj = localStorage.getItem("obj");
            obj = JSON.parse(obj);
        }

    })

    onDestroy(() => {
        if (typeof window !== "undefined" && window.sessionStorage) {
            obj = localStorage.removeItem("obj");
        }
    })

</script>

{#if Object.keys(obj).length > 0}
    <div class="section-rebrand rebrand-v2-hero-padding">
        <div class="container-rebrand-2 grid">
            <!-- <P_One_Navigator></P_One_Navigator> -->
            <div
                id="w-node-b197fe63-6dfb-4735-b0d8-7876ffce4d48-15b68dda"
                class="container-rebrand no-padding-sides"
            >
                <Two_ProductHP {obj}></Two_ProductHP>
                <Two_Card2Prices obj={obj}></Two_Card2Prices>

                <div class="add-to-cart-wrapper-bundles">
                    <div class="width-100 w-dyn-list">
                        <div role="list" class="w-dyn-items">
                            <div role="listitem" class="w-dyn-item">
                                <div class="add-to-cart-2">
                                    <form
                                        data-node-type="commerce-add-to-cart-form"
                                        data-commerce-sku-id="6482789cf65ad8778df94c8e"
                                        data-loading-text="Adding to cart..."
                                        data-commerce-product-id="6482789b12d9a7ee1b054f66"
                                        class="w-commerce-commerceaddtocartform atc-div"
                                    >
                                        <!-- <Three_ProductC></Three_ProductC> -->
                                        <Three_ProductB></Three_ProductB>
                                    </form>
                                    <div
                                        style="display:none"
                                        class="w-commerce-commerceaddtocartoutofstock"
                                        tabindex="0"
                                    >
                                        <div>This product is out of stock.</div>
                                    </div>
                                    <div
                                        aria-live=""
                                        data-node-type="commerce-add-to-cart-error"
                                        style="display:none"
                                        class="w-commerce-commerceaddtocarterror"
                                    >
                                        <div
                                            data-node-type="commerce-add-to-cart-error"
                                            data-w-add-to-cart-quantity-error="Product is not available in this quantity."
                                            data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
                                            data-w-add-to-cart-mixed-cart-error="You can’t purchase another product with a subscription."
                                            data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
                                            data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
                                            data-w-add-to-cart-select-all-options-error="Please select an option in each set."
                                        >
                                            Product is not available in this
                                            quantity.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <P_One_ProductBenefits></P_One_ProductBenefits>
                <!-- <P_One_ProductRecomendation></P_One_ProductRecomendation> -->
            </div>
        <P_One_ProductImage obj={obj} ></P_One_ProductImage>
        </div>
    </div>
{/if}
