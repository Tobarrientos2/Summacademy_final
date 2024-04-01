<script>
    import { onMount } from "svelte";

    export let v_txt_1 = "v_txt_1";
    export let v_txt_2 = "v_txt_2";
    export let v_txt_3 = "v_txt_3";
    export let v_img = "v_img";
    export let v_src = "v_src";
    export let obj = {};


    onMount(() =>{
        var subheroSwiper = new Swiper('#subhero-swiper', {
			  slidesPerView: 1,
				pagination: {
					el: '.subhero-pagination',
					clickable: true,
				bulletClass: "subhero-bullet",
				bulletActiveClass:"subhero-bullet-active"
				},
				navigation: {
					nextEl: '#hero-next',
					prevEl: '#hero-prev'
				},
				autoplay: {
				delay: 5000,
					disableOnInteraction: false
			  },
				loop: false,
				watchSlidesProgress: true
			});
			var categoryButton = document.querySelectorAll(".home-product-categories-button")
			categoryButton = [...categoryButton]
			categoryButton.forEach(item => {
				item.addEventListener("click", function(){
					document.querySelector(".home-product-categories-button.active-button").classList.remove("active-button")
					this.classList.add("active-button")
					var wrappers = document.querySelectorAll(".home-product-wrapper")
					wrappers.forEach(wrapper => {
						setTimeout(function(){
							wrapper.style.display = "none"
						},250)
						wrapper.style.opacity = 0
					})
					setTimeout(function(){
						wrappers[categoryButton.indexOf(item)].style.display = "block"
						wrappers[categoryButton.indexOf(item)].style.opacity = 100
					},250)
				})
			})
			
			
			  categoryButton[0].click()
    })
    </script>
{#if obj != undefined}
<div
    class="swiper-slide subhero-swiper swiper-slide-prev"
    role="group"
    aria-label="1 / 3"
    style="width: 592px;"
>
    <img 
        src={obj.v_img}
        loading=""
        alt=""
        class="image-rebrand subhero-swiper"
    />
</div>
{/if}
