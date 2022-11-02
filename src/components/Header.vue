<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    header {
        color: white;
        font-size: 270px;
        height: 100vh;
        line-height:1;
        z-index:  1;
    }

    header .test2 {
        width: 100%;
    }

    .test2 div:nth-child(odd){
        transform: translateX(-100%);
    }
    .test2 div:nth-child(even){
        transform: translateX(100%);
    }


</style>


<template>
    <header>
        <div class="test2">
            <div class="test">WHAT</div>
            <div class="test">THE</div>
            <div class="test">WEB</div>
        </div>
   </header>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
    mounted(){
        let images =  document.querySelectorAll('header .test2');
        console.log(images);
        images.forEach((image, i) => {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: image,
                    pin: true,
                    scrub: true,
                    start: () => "top 0",
                    end: () => '+=100%',
                    markers: true,
                }
            });
            tl.addLabel('initial');
            tl.to(image.querySelectorAll('header div.test2 div.test'), {
                ease: 'none',
                x: 0,
                stagger: 0.2
            });
        });

        /*let sliders = document.querySelectorAll('.slider');
        sliders.forEach((slider, i) => {
            x = -slider.querySelector('.slider__items').offsetWidth + window.innerWidth;
            gsap.to(slider.querySelector('.slider__items'), {
                x: x,
                ease: "none",
                scrollTrigger:{
                    trigger: slider,
                    pin: true,
                    scrub: true,
                    start: () => "top top",
                    end: () => '+=100%',
                }
            });
        });*/

        //ScrollTrigger.sort();
    }
}


</script>