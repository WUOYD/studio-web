<script setup> 
    import IpTitleSection from './IpTitleSection.vue'
</script>
<template>
    <IpTitleSection />
    <section class="ip-section">
        <div class="wrapper">
            <div class="section1 panel">
                <div class="text1-wrapper">
                   <p class="text-big">The Internet is a network of networks.</p>
                   <p> It connects billions of devices together like a laptop or a smartphone.</p>
               </div>
                
            </div>
            <div class="section6 panel">
                <div class="img-wrapper">
                    <div class="imgscale">
                        <img  src="@/assets/Laptop.png" alt="">
                    </div>
                    <div class="imgscale">
                        <img  src="@/assets/Laptop.png" alt="">
                    </div>
                   <div class="imgscale">
                        <img src="@/assets/Laptop.png" alt="">
                    </div>
                    <div class="imgscale">
                        <img src="@/assets/Laptop.png" alt="">
                    </div>
                    <span class="vertical-line"></span>
                    <span class="vertical-line2"></span>
                    <span class="line"></span>
                    <span class="line2"></span>
                </div>

            </div>
            <div class="section2 panel">
               <div class="text2-wrapper">
                <p> For connecting with each other </p>
                <p class="text-big">every device has  an unique adress the socalled IP adress.</p>
            </div>
            <div class="img2-wrapper">
                <img  src="@/assets/Laptop.png" alt="">
                <p id="animated-ip" class="text-big">255.255.14.0</p>
            </div>
            
            </div>
            <div class="section3 panel">
                <div id="trigger-ip" class="text3-wrapper">
                    <p>An IP adress consists</p>
                    <p class="text-big">four numbers ranging from 0 to 255 who are separated with a point.</p>
                    <p> These numbers represent bits, which every computer works with internally.</p>
                </div>
            </div> 
            <div class="section4 panel">
                <div class="text4-wrapper"> 
                    <p class="text-big">Each part of the IP adress has a different meaning. </p>
                    <p>The first number refers to a country, the second to a region, the third to a subnet and the last to specifc device.  </p> 
                </div> 
                  <div class="ip-wrapper">
                        country region subnet device
                    </div>
            </div>      

            <div class="section5 panel">
                    <div class="text5-wrapper">
                   <p> Normally users don’t know the IP adress of a service like YouTube or Facebook, so you google for the domain. Google tells you under which domain you can reach a service. Example: youtube.com / facebook.com</p>
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

   section .section1{
        background-color: coral;
    }

    section .section2{
        background-color: blanchedalmond;
    }

    section .section3{
        background-color: lightgreen;
    }

    section .section4{
        background-color: blueviolet;
    }
    
     section .section4{
        background-color: grey;
    }
   

    section .panel {
        display: flex;
        width: 100%;
        height: 100%;
    }

    section .panel:last-of-type {
        margin-right: unset;
    }

    section .text1-wrapper{
        /*background-color: blueviolet;*/
        display: flex;
        flex-direction: column;
        width: 40vw;

    }

    section .text2-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40vw;
        /*background-color: green;*/
    }

    section .text3-wrapper{
        /*background-color: burlywood;*/
        display: flex;
        flex-direction: column;
        width: 40vw;

    }

    section .text4-wrapper{
       /* background-color: pink;*/
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40vw;
    }

       section .text5-wrapper{
       /* background-color: pink;*/
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 40vw;
    }

    section .img-wrapper{
        display: flex;
        flex-wrap: wrap;
        width: 30vw;
        margin-left: 10vw;
        /*background-color: blue;*/
        justify-content: space-between;
    }

    section .img2-wrapper{
        display: flex;
        justify-content: center;
        flex-direction: column;
       /* background-color: orange;*/
    }

    .ip-align{
        margin-top: 70vh;
        
    }

    .ip-wrapper{
    display: flex;
    align-items: flex-end;
    margin-left: 35px;
    height: 200px;
    margin-top: 63px;
    font-size: 33px;
    color: white;


    }

    section .imgscale{
        width: 12vw;
        height: 12vw;
       /* background-color: beige;*/
    }
     
    section p{
        font-size: 21px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 1.3;
        color: white;
    }

    section .text-big{
       font-size: 40px;
       font-family: 'Roboto', sans-serif;
       font-weight: 500;
       line-height: 1.3;
       color: white;

    }

    section.ip-section {
        height: 100vh;
    }

    .vertical-line{
        position: absolute;
        border-left: 2px solid white;
        display: block;
        height: 35vh;
        margin-left: 95px;
        margin-top: 160px;
        width: 1px;
    }

    .vertical-line2{
        position: absolute;
        border-left: 2px solid white;
        display: block;
        height: 35vh;
        margin-left: 403px;
        margin-top: 160px;
        width: 1px;
    }

    .line{
        position: absolute;
        border-bottom: 2px solid white;
        display: block;
        height: 1px;
        margin-left: 195px;
        margin-top: 149px;
        width: 125px;
    }

    .line2{
        position: absolute;
        border-bottom: 2px solid white;
        display: block;
        height: 1px;
        margin-left: 195px;
        margin-top: 412px;
        width: 125px;
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
        var x = 3 * window.innerWidth - 3 * getPanelMarginLeft();
        let scrollTween = gsap.to(slider.querySelector('section.ip-section .wrapper'), {
            x: -x,
            ease: "none",
            scrollTrigger: {
                trigger: slider,
                pinType: "fixed",
                pin: true,
                snap: 1 / (4 - 1),
                scrub: 4,
                start: () => "top top",
                end: () => '+=100%',
            }
        });

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
        });
    }
}


</script>