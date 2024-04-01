<script>
	import Three_LinkRecommendations from './../Three/Three_LinkRecommendations.svelte';
	import Three_ButtonAddProduct from './../Three/Three_ButtonAddProduct.svelte';
    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<div role="listitem" class="w-dyn-item">
    <div>
        <form
            data-node-type="commerce-add-to-cart-form"
            data-commerce-sku-id="6487b59c6d04c3bdf3f80376"
            data-loading-text="Adding to cart..."
            data-commerce-product-id="6487b59bb908c9bf3497aa7e"
            class="w-commerce-commerceaddtocartform"
        >
            <label
                for="quantity-1218281b495456a106a9becc4af60257"
                class="hide"
                data-svelte-h="svelte-altyoo">Quantity</label
            >
            <div class="cart-item-empty">
                <img
                    alt="Glow Booster"
                    loading="lazy"
                    data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                    src="https://assets-global.website-files.com/5f3a15a0ecda61980f49ff52/649cca605d02ffea94cf6d82_20230629T1203-8b5a232e-b9e5-472a-b38b-d2c43c2786a8.png"
                    class="cart-image recommended-cart-image"
                />
                <div class="fn-column full-width-rebrand description-column">
                    <div class="fn-column cart-text-wrapper">
                        <div data-svelte-h="svelte-10q2qtv">Glow Booster</div>
                        <div class="flex-horizontal">
                            <div class="old-price w-dyn-bind-empty"></div>
                            <div
                                data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                data-svelte-h="svelte-1m07kr6"
                            >
                                $89&nbsp;
                            </div>
                        </div>
                    </div>
                    <p
                        class="text-small text-colour-primary-500 margin-bot-s-rebrand"
                        data-svelte-h="svelte-1sy40rd"
                    >
                        Clinically-backed formulas for radiant skin.
                    </p>
                    <div class="fn-column flex-horizontal-rebrand gap-24">
                        <Three_ButtonAddProduct></Three_ButtonAddProduct>
                        <Three_LinkRecommendations></Three_LinkRecommendations>
                    </div>
                </div>
            </div>
            <a
                data-node-type="commerce-buy-now-button"
                data-default-text="Buy now"
                data-subscription-text="Subscribe now"
                aria-busy="false"
                aria-haspopup="false"
                style="display:none"
                class="w-commerce-commercebuynowbutton"
                href="/checkout"
                data-publishable-key="pk_live_51GjuxpI9the8U93mxiJtMRmSqU3pFBksXRu34sf5Lh8njovioY5ukHkoQw5SNEkf3uJzinKyR4ivgNrOcjIRpE8300QJrYX1Xq"
                data-svelte-h="svelte-1txmecc">Buy now</a
            >
        </form>
        <div
            style="display:none"
            class="w-commerce-commerceaddtocartoutofstock"
            tabindex="0"
        >
            <div data-svelte-h="svelte-12ya7r8">
                This product is out of stock.
            </div>
        </div>
        <div
            aria-live="assertive"
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
                data-svelte-h="svelte-te9gct"
            >
                Product is not available in this quantity.
            </div>
        </div>
    </div>
</div>
