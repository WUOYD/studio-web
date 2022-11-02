<template>
    <section class="ip-section text-left-img">
        <div class="wrapper">
            <div class="text-wrapper">
                <h2>IP Section</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br><br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="img-wrapper">
                <img src="@/assets/ip1.jpg">
                <img src="@/assets/ip2.jpg">
                <img src="@/assets/ip3.jpg">
                <img src="@/assets/ip4.jpg">
            </div>
        </div>
    </section>
</template>

<style scoped>
    section .img-wrapper img {
        width: 50%;
        object-fit:contain;
    }

    section .img-wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    section .img-wrapper {
        padding-left: 15px;
    }

    section .text-wrapper {
        padding-right: 15px;
    }
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(){
        let sliders = document.querySelectorAll('section.ip-section');
        console.log(document.querySelectorAll('section.ip-section'));
        sliders.forEach((slider, i) => {
            var x = slider.querySelector('.wrapper').offsetWidth + window.innerWidth;
            console.log(x);
            gsap.to(slider.querySelector('.wrapper'), {
                x: -x,
                ease: "none",
                scrollTrigger:{
                    trigger: slider,
                    pin: true,
                    scrub: true,
                    start: () => "top top",
                    end: () => '+=100%',
                }
            });
        });

        ScrollTrigger.sort();
    }
}


</script>