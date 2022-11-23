<script setup>
    import ipSVG from './ipSVG.vue'
</script>
<template>
    <section id="ip-address" class="ip-section">
        <div class="wrapper">
            <div class="title-section panel">
                <div class="wrapper">
                    <div class="titel-wrapper">
                        <h2>The<br><span class="stroke">IP ADRESS</span></h2>
                    </div>
                </div>
            </div>
            <div class="section1 panel">
                <div class="text-wrapper">
                    <p class="text-big">The Internet is a network of <span class="stroke">networks</span><span class="blue">.</span></p>
                    <p>It connects billions of devices together like a laptop or a smartphone.</p>
                </div>
            </div> 
            <div class="section2 panel">
                <ipSVG/>
            </div>
            <div class="section3 panel" id="ip-trigger">
               <div class="text-wrapper">
                    <p class="text-big">Every <span class="stroke">device</span> has an Ip adress<span class="blue">.</span></p>
                    <p>The Ip adress is an unique indicator for a certain device.</p>
                    <div id="ip-adress">255<span class="blue">.</span>
                    255<span class="blue">.</span>
                    14<span class="blue">.</span>
                    0</div>
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
                    <p>The first number refers to a country, the second to a region, the third to a subnet and the last to specifc device.</p> 
                </div>
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
    .title-section .titel-wrapper{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .title-section h2 {
        font-weight: 600;
        color: white;
        font-size: 80px;
        line-height: 1;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    .title-section .stroke{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
    }

    h3 {
        font-weight: 600;
        color: white;
        font-size: 5vw;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    section p{
            font-weight: 600;
            color: white;
            font-size: 2vw;
            line-height: 1.2;
            z-index:  1;
            font-family: 'Roboto', sans-serif;

    }

    section .stroke-blue{
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgb(67, 242, 255);
      -webkit-text-fill-color: transparent;


    }

    section .stroke{
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
      -webkit-text-fill-color: transparent;


    }
    section.ip-section .wrapper{
        display: flex;
        width: 100%;
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
        width: 85%;
        color: white;
        position: relative;
    }

    .text-wrapper p {
        font-size: 25px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        line-height: 1.3;
        color: white;
    }

    .section2 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -10%;
        margin-right: -7%;
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

    .special-text > div:first-of-type::after {
        content: "Country";
    }

    .special-text > div:nth-of-type(2)::after {
        content: "Region";
    }

    .special-text > div:nth-of-type(3)::after {
        content: "Subnet";
    }

    .special-text > div:nth-of-type(4)::after {
        content: "Device";
    }

    .special-text > div::after {
        position: absolute;
        top: 185%;
        left: 0;
        font-size: 25%;
        text-align: center;
        width: 100%;
    }

    .special-text > div::before {
        content: "";
        border-left: 1px solid rgb(67, 242, 255);
        position: absolute;
        top: 100%;
        left: 50%;
        height: 80%;
    }

    #ip-adress {
        font-size: 65px;
        position:absolute;
        bottom:0;
        left:0;
    }

    section .text-big{
        font-size: 65px;
        line-height: 0.9;
        color: white;
        margin-bottom: 30px;
        font-weight: 600;
        color: white;
        line-height:1;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    section.ip-section {
        height: 100vh;
    }

    .section4 {
        text-align: center;
        justify-content: center;
    }

    .section4 .text-wrapper {
        justify-content: center;
        padding-bottom: 5%;
    }

    .section5 > div:first-of-type {
        width: 55%;
        justify-content: center;
    }

    .section5 > div:last-of-type {
        width: 45%;
        justify-content: flex-end;
        align-items: center;
    }

</style>

<script>
    export default {
        data: () => ({

        }),
        mounted() {
            function getPanelMarginLeft(){
                var width = document.querySelector(".ip-section .title-section.panel").offsetWidth;
                var windowWidth = window.innerWidth;
                return ((windowWidth - width) / 2);
            }

            document.querySelector(".ip-section .section1.panel").style.marginLeft = getPanelMarginLeft() + "px";
            document.querySelector(".ip-section .section5.panel").style.marginLeft = getPanelMarginLeft() + "px";
        }
    }
</script>