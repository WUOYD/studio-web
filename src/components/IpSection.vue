<template>
    <section class="ip-section text-left-img">
        <div class="wrapper">
            <div class="text-wrapper">
             
                <p>The Internet is a network of networks. It connects billions of devices together like a laptop or a smartphone.</p>
            </div>
            <div class="img-wrapper">
                <img src="@/assets/Laptop.png">
                <img src="@/assets/Laptop.png">
                <img src="@/assets/Laptop.png">
                <img src="@/assets/Laptop.png">
              </div>
            
           
        </div>
    </section>
</template>

<style scoped>


section .wrapper{
    display: flex;
    background-color: aqua;
    height: 100vh;
    width: 200vw;
}
    section .img-wrapper img {
        
        background-color: blue;
        
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
        background-color: brown;
    }

   

    section p{
        width: 20vw;
        font-size: 50px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 1.3;
        color: white;

    }
</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(){
        let sliders = document.querySelectorAll('section.ip-section');
        sliders.forEach((slider, i) => {
            var x = slider.querySelector('.wrapper').offsetWidth + window.innerWidth;
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