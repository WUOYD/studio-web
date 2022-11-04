<template>
    <section class="ip-section ">
        <div class="wrapper">

          
            <!--
            
            <div class="section4"></div>-->
    <div class="section1">
        <div class="text1-wrapper">
             <p class="text-big">The Internet is a network of networks.</p>
             <p> It connects billions of devices together like a laptop or a smartphone.</p>
        </div>
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
        </div>

    </div>

    <div class="section2">
             <div class="text2-wrapper">
                    <p> For connecting with each other </p>
                    <p class="text-big">every device has  an unique adress the socalled IP adress.</p>
                  </div>
    

                  <div class="img2-wrapper box-2">
                        <img  src="@/assets/Laptop.png" alt="">
                    
                    <p class="text-big">255.255.14.0</p>
                  </div>

    </div>

    <div class="section3">
                  
            <div class="text3-wrapper">
                <p>An IP adress consists</p>
                <p>four numbers ranging from 0 to 255 who are separated with a point.</p>
                <p> These numbers represent bits, which every computer works with internally.</p>
            </div>

    </div>
           
            
           
        </div>
    </section>
</template>

<style scoped>


section .wrapper{
    display: flex;
   background-color: aqua;
    height: 100vh;
    width: 400vw;
    justify-content: flex-start;
}

section .section1{
display: flex;
width: 100vw;
height: 100vh;
background-color: coral;
}

section .section2{
display: flex;
width: 100vw;
height: 100vh;
background-color: blanchedalmond;
}

section .section3{
display: flex;
width: 100vw;
height: 100vh;
background-color: lightgreen;
}

section .section4{
display: flex;
width: 100vw;
height: 100vh;
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
    background-color: green;
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
justify-content: center;
flex-direction: column;
background-color: orange;
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
     font-size: 55px;
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
                    /*snap:0.33,*/
                    start: () => "top top",
                    end: () => '+=100%',
                }
            });
        });

/*Ip text sidescroll text sollte sich nach rechts bewegen*/
 gsap.to(".box-2", {
  x: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    start: "center 80%",
    end: "center 20%",
    scrub: true
  }
});

/*Ip text sidescroll end*/

        ScrollTrigger.sort();
    }
}


</script>