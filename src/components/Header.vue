<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    header {
        height: 250vh;
     
    }

    header .test:last-of-type{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: transparent;
    }

    .test{
        margin-top: 2vw;
        font-weight: 600;
        color: white;
        font-size: 18vw;
        line-height:0.8;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    header .test2 {
        width: 100%;
    }

    .test2 div:nth-of-type(1){
        transform: translateX(-100%);
    }
    .test2 div:nth-of-type(2){
        transform: translateX(-150%);
    }
    .test2 div:nth-of-type(3){
        transform: translateX(200%);
    }
</style>

<template>
    <header>
        <div class="test2">
            <div class="test sp">WHAT</div>
            <div class="test sp">THE</div>
            <div class="test web">WEB</div>
        </div>
   </header>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(){
        let images =  document.querySelectorAll('header .test2');
        images.forEach((image, i) => {
            const tl = gsap.timeline({
                scrollTrigger:{
                    trigger: image,
                    pin: true,
                    scrub: true,
                    start: () => "top 0",
                    end: () => '+=150%',
                },
                yoyo: false,
            });

            tl.addLabel('initial');
            tl.to(image.querySelectorAll('header div.test2 div.test:not(.sp)'), {
                ease: 'none',
                x: 500,
                stagger: 0.0
            }, 'initial');
            tl.to(image.querySelectorAll('header div.test2 div.test.sp'), {
                ease: 'none',
                x: 0,
                stagger: 0.0
            }, 'initial');
        });
    }
}


</script>