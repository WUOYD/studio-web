<script setup> 
    import IpTitleSection from './IpTitleSection.vue'
</script>
<template>
    <IpTitleSection />
    <section class="ip-section">
        <div class="wrapper">
            <div class="section1 panel">
                <div class="text-wrapper">
                    <p class="text-big">The Internet is<br> a network of <span class="stroke">networks</span><span class="blue">.</span></p>
                   <p>It connects billions of devices together like a laptop or a smartphone.</p>
                </div>
            </div>
            <div class="section2 panel">
                <div class="img-wrapper">
                    <div>
                        <img  src="@/assets/Laptop.png" alt="">
                    </div>
                    <div>
                        <img  src="@/assets/Laptop.png" alt="">
                    </div>
                    <div>
                        <img src="@/assets/Laptop.png" alt="">
                    </div>
                    <div>
                        <img src="@/assets/Laptop.png" alt="">
                    </div>
                </div>
            </div>
            <div class="section3 panel">
               <div class="text-wrapper">
                    <p class="text-big">Every <span class="stroke">device</span> has an Ip adress.</p>
                    <p>The Ip adress is an unique indicator for a certain device<span class="blue">.</span></p>
                </div>
            </div>
            <div class="section4 panel">
                <div class="text-wrapper">
                    <p class="text-big">An IP adress consists four <span class="stroke">numbers</span><span class="blue">.</span></p>
                    <p>They are separated with a point. These numbers represent bits, which every computer works with internally. The numbers range from 0 to 255.</p>
                </div>
            </div> 
            <div class="section5 panel">
                <div class="text-wrapper"> 
                    <p class="text-big">Normally users don’t know the IP adress of a <span class="stroke">service</span><span class="blue">.</span></p>
                    <p>So you google for the domain. Google tells you under which domain you can reach a service. Example: youtube.com / facebook.com</p> 
                </div>
            </div>      
            <div class="section6 panel">
                <div class="text-wrapper special-text text-big">
                   <div>255<span class="blue">.</span></div>
                   <div>255<span class="blue">.</span></div>
                   <div>14<span class="blue">.</span></div>
                   <div>0</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    section.ip-section .wrapper{
        display: flex;
        height: 100%;
        justify-content: flex-start;
    }

    section .panel {
        display: flex;
        min-width: 100%;
        max-width: 100%;
        height: 100%;
    }

    section .panel:last-of-type {
        margin-right: unset;
    }

    .text-wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .text-wrapper p {
        font-size: 35px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 1.3;
        color: white;
    }

    .section2 {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text-wrapper.special-text {
        flex-direction: row;
        justify-content: center;
        margin-bottom: unset;
        align-items: center;
    }

    .special-text > div {
        position: relative;
    }

    .section2 .img-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        width:  90%;
        flex-wrap: wrap;
        height: 100%;
    }

    .section2 .img-wrapper > div {
        width: 50%;
        display: flex;
        justify-content:center;
        align-items:center;
        position: relative;
    }

    .section2 .img-wrapper img {
        width: 60%;
        z-index: 2;
    }

    .section2 .img-wrapper > div:first-of-type::after,
    .section2 .img-wrapper > div:nth-of-type(3)::after {
        content: "";
        position: absolute;
        top: 50%;
        width: 60%;
        height: 2px;
        background-color: rgb(67, 242, 255);
        right: -30%;
    }

    .section2 .img-wrapper > div:first-of-type::before,
    .section2 .img-wrapper > div:nth-of-type(2)::before {
        content: "";
        position: absolute;
        width: 4px;
        height: 70%;
        background-color: rgb(67, 242, 255);
        bottom: -45%;
        left: 50%;
    }

    section .text-big{
        font-size: 130px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 0.9;
        color: white;
        margin-bottom: 10px;
    }

    section.ip-section {
        height: 100vh;
    }

    .stroke{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: transparent;
    }

    .blue{
        color:rgb(67, 242, 255);
    }

</style>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
    mounted(){
        function setPanelWidths(){
            var width = document.querySelector("section.ip-section .panel:first-of-type").offsetWidth;
            var panels = document.querySelectorAll("section.ip-section .panel:not(:first-of-type)");
            panels.forEach((panel, i) => {
                panel.style.minWidth  = width+"px";
                panel.style.maxWidth  = width+"px";
                panel.style.marginLeft = getPanelMarginLeft() + "px";
            });
        }

        function getPanelMarginLeft(){
            var width = document.querySelector("section.ip-section .panel:first-of-type").offsetWidth;
            var windowWidth = window.innerWidth;
            return ((windowWidth - width) / 2);
        }

        setPanelWidths();

        window.addEventListener("resize", setPanelWidths);

        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".panel");
        let slider = document.querySelector('section.ip-section');
        var x = 5 * window.innerWidth - 5 * getPanelMarginLeft();
        let scrollTween = gsap.to(slider.querySelector('section.ip-section .wrapper'), {
            x: -x,
            ease: "none",
            scrollTrigger: {
                trigger: slider,
                pinType: "fixed",
                pin: true,
                snap: 1 / (6 - 1),
                scrub: 4,
                start: () => "top top",
                invalidateOnRefresh: true,
                end: () => '+=100%',
            }
        });
/*
        gsap.set("#animated-ip", {
            x: 0
        });

        gsap.to("#animated-ip", {
            x: 3000,
            ease: "none",
            scrollTrigger: {
                trigger: "#trigger-ip",
                containerAnimation: scrollTween,
                start: "center 80%",
                end: "center 20%",
                scrub: 1,
                id: "2"
            }
        });*/
    }
}


</script>