<script>
	import Three_ButtonProduct from './../Three/Three_ButtonProduct.svelte';
	import Three_CountProduct from './../Three/Three_CountProduct.svelte';

    export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

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
                        <Three_CountProduct></Three_CountProduct>
                       <Three_ButtonProduct></Three_ButtonProduct>
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