<script>
     export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<div class="cart-header-wrapper">
    <div class="flex-horizontal align-bottom">
        <h4 class="w-commerce-commercecartheading cart-heading">Your Cart</h4>
        <div class="cart-amount-text">(</div>
        <div
            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
            class="cart-amount-text"
        >
            0
        </div>
        <div class="cart-amount-text last">items)</div>
    </div>
    <a
        href="#"
        data-node-type="commerce-cart-close-link"
        role="button"
        class="w-commerce-commercecartcloselink w-inline-block"
        aria-label="Close cart"
        ><svg width="16px" height="16px" viewBox="0 0 16 16"
            ><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                ><g fill-rule="nonzero" fill="#333333"
                    ><polygon
                        points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"
                    ></polygon></g
                ></g
            ></svg
        ></a
    >
</div>
