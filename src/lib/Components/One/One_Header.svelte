<script>
	import P_One_HeaderCart from './P_One_HeaderCart.svelte';
	import Three_HeaderI from '../Three/Three_HeaderI.svelte';
	import P_One_Dropdown from './P_One_Dropdown.svelte';
	import Three_HeaderL from '../Three/Three_HeaderL.svelte';

  export let v_txt_1 = 'v_txt_1';
    export let v_txt_2 = 'v_txt_2';
    export let v_txt_3 = 'v_txt_3';
    export let v_img = 'v_img';
    export let v_src = 'v_src';
</script>

<div
  data-w-id="6d2df4e9-f08a-9dc6-bd59-5c4ff4085b13"
  data-animation="default"
  data-collapse="small"
  data-duration="400"
  data-easing="ease"
  data-easing2="ease"
  role="banner"
  class="navbar-v3 w-nav"
>
  <!-- <div class="banner-navbar-top">
    <div class="navbar-top-wrapper-left">
      <img
        src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/65c04e6d148e4c2b54209ca2_Notification-Mega%20Phone.svg"
        loading="lazy"
        alt=""
        class="image-103"
      />
      <div class="paragraph-s-rebrand">
        We’ve updated our Terms &amp; Conditions!
      </div>
    </div>
    <div class="paragraph-s-rebrand font-weight-600">
      <a href="/terms-and-conditions" class="link-2">Check updates</a>
    </div>
  </div> -->
  <div class="navbar-container-rebrand">
    <Three_HeaderI></Three_HeaderI>
    <nav role="navigation" class="navmenu-v3 w-nav-menu">
      <P_One_Dropdown></P_One_Dropdown>
      <div class="div-block-19">
        <!-- <Three_HeaderL></Three_HeaderL> -->
        <!-- <P_One_Dropdown></P_One_Dropdown> -->
      </div>
      <a
        href="https://app.skin.software/login?redirect=%2Fprofile"
        class="nav-login-rebrand hide-desktop w-button">Start consult</a
      >
    </nav>
    <!-- <div class="nav-right-wrapper-rebrand nav-v3-right">
     
      <div
        data-node-type="commerce-cart-wrapper"
        scroll="enable"
        data-open-product=""
        data-wf-cart-type="rightSidebar"
        data-wf-page-link-href-prefix=""
        class="w-commerce-commercecartwrapper cart v3"
        data-wf-stripe-element-instance="0"
      >
        <a
          href="#"
          data-node-type="commerce-cart-open-link"
          role="button"
          class="w-commerce-commercecartopenlink cart-button v3 w-inline-block"
          aria-haspopup="dialog"
          aria-label="Open empty cart"
          ><img
            src="https://assets-global.website-files.com/5f1797b724a35d807050c3d9/64509ff151a45091d5f231f4_Cart%20Basket.svg"
            loading="lazy"
            alt=""
            class="cart-icon v3"
          />
          <div
            id="cart-qty"
            data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
            class="w-commerce-commercecartopenlinkcount cart-quantity v3"
          >
            0
          </div></a
        >
        <P_One_HeaderCart></P_One_HeaderCart>
      </div>
      <div
        id="nav-button"
        scroll="both"
        class="nav-menu-button-rebrand v3 w-nav-button"
        style="-webkit-user-select: text;"
        aria-label="menu"
        role="button"
        tabindex="0"
        aria-controls="w-nav-overlay-0"
        aria-haspopup="menu"
        aria-expanded="false"
      >
        <div class="navmenu-line _1"></div>
        <div class="navmenu-line _2"></div>
        <div class="navmenu-line _3"></div>
      </div>

    </div> -->
  </div>
  <div class="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>
