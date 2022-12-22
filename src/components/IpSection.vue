<script setup>
    import ipSVG from './ipSVG.vue'
</script>
<template>
    <section id="ip-section" class="ip-section">
        <div class="wrapper">
            <div class="title-section panel">
                <div class="wrapper">
                    <div class="titel-wrapper">
                        <h2>The<br><span class="stroke">IP ADRESS</span></h2>
                    </div>
                </div>
            </div>
            <div class="section1 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">The Internet is a network of <span class="stroke">networks</span><span class="blue">.</span></p>
                    <p>It connects billions of devices like a laptop or a smartphone.</p>
                </div>
                <ipSVG/>
                <img id="ipMobile1" src="../assets/ipMobile1.png">
            </div>
            <div class="section2 panel" id="ip-trigger">
               <div class="text-wrapper">
                    <p class="text-big">Every <span class="stroke">device</span> has an IP adress<span class="blue">.</span></p>
                    <p>The IP adress is an unique indicator for a certain device.</p>
                    <div id="ip-adress"><span class="i">255</span><span class="blue">.</span>
                    <span class="i">255</span><span class="blue">.</span>
                    <span class="i">14</span><span class="blue">.</span>
                    <span class="i">0</span></div>
                </div>
            </div>
            <div class="section3 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">An IP adress consists of four <span class="stroke">numbers</span><span class="blue">.</span></p>
                    <p>They are separated with a point. These numbers represent bits, which every computer works with. The numbers range from 0 to 255.</p>
                </div>
            </div> 
            <div class="section4 panel row-1">
                <div class="text-wrapper"> 
                    <p class="text-big">Normally users do not know the IP adress of a <span class="stroke">service</span><span class="blue">.</span></p>
                    <p>The first number refers to a country, the second to a region, the third to a subnet and the last to specifc device.</p> 
                </div>
                <div class="ip-locate text-wrapper special-text text-big">
                   <div><span class="i">255</span><span class="blue">.</span></div>
                   <div><span class="i">255</span><span class="blue">.</span></div>
                   <div><span class="i">14</span><span class="blue">.</span></div>
                   <div><span class="i">0</span></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #ip-adress {
        font-size: 65px;
        position:absolute;
        bottom:0;
        left:0;
        font-weight: 400;
        z-index: 2;
    }

    #ipMobile1 {
        display: none;
    }

    .section1 {
        min-width: 140%;
        max-width: 140%;
        margin-right: -7%;
        z-index: -1;
    }

    .section2::before {
        background: none !important;
    }

    .section1::after {
        content: "";
        position: absolute;
        background-color: black;
        top: calc(-100vh / 6);
        height: 100vh;
        width: 90%;
        left: 90%;
        z-index: -1
    }

    .section3 {
        z-index: -1;
    }

    .section4 {
        align-items: flex-start;
    }

    .section4 .ip-locate{
        height: 100%;
    }

    .section4 > div:first-of-type {
        width: 55%;
        justify-content: center;
    }

    .section4 > div:last-of-type {
        width: 45%;
        justify-content: flex-end;
        align-items: center;
    }

    @media only screen and (max-width: 1199.98px) {
        .section1 svg {
             padding-top: 10%;
        }
    }
   
    @media only screen and (max-width: 991.98px) {
        .section1 {
            min-width: 100%;
            max-width: 100%;
            margin-right: unset;
            z-index: -1;
            flex-direction: column;
        }

        #ip-adress {
            position: static;
            margin-top: 60px;
        }

        .section4 > div:first-of-type {
          width: 100%;
          justify-content: flex-start;
        }

        .section4 > div:last-of-type {
          width: 100%;
          justify-content: center;
          align-items: center;
          padding-top: 60px;
        }

        .section1 svg {
            width: 100%;
            height: auto;
            object-fit: contain;
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 767.98px) {
        
    }

    @media only screen and (max-width: 399.98px) {
        .section1 svg {
            display: none;
        }

        #ipMobile1 {
            display: block;
            margin-top: 60px;
            width: 100%;
            object-fit: contain;
        }
    }
</style>

<script>
    export default {
        data: () => ({

        }),
        mounted() {
        }
    }
</script>