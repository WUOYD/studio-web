<script setup> 
    import DNSTitleSection from './DNSTitleSection.vue'
</script>
<template>
    <DNSTitleSection />
    <section class="dns-section">
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
                <p id="animated-item" class="text-big">255.255.14.0</p>
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
        </div>
    </section>
</template>

<style scoped>
    section.dns-section .wrapper{
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
        min-width: 100%;
        max-width: 100%;
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

    section.dns-section {
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