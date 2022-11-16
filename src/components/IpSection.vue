<script setup> 
    
</script>
<template>
    <IpTitleSection />
    <section class="ip-section">
        <div class="wrapper">
            <div class="section1 panel">
                <div class="ip-titel-wrapper">
                    <h3>The <br> <span class="stroke-blue">IP ADRESS</span></h3>
                </div>
            </div>


            <div class="section2 panel">
                <div class="network-wrapper">
                    <p class="text-big">The Internet is a network of <span class="stroke"> networks</span> <span class="blue">.</span></p>
                    <p> It connects billions of devices together like a laptop or a smartphone.</p>
                  
            </div>
            </div>
            <div class="section3 panel">
               <div class="text-wrapper">
                    <p class="text-big">Every <span class="stroke">device</span> has an Ip adress<span class="blue">.</span></p>
                    <p>The Ip adress is an unique indicator for a certain device.</p>
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

section .ip-titel-wrapper{
    width: 100%;
    height: 100%;
    /*background-color: darksalmon;*/
    display: flex;
    justify-content: center;
    align-items: center;
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
        margin-top: 5vh;

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

.network-wrapper{
display: flex;
flex-direction: column;
/*background-color: grey;*/
width: 50%;
height: 50%;
margin-top: -20vh;



}
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
        font-weight: 600;
        color: white;
        font-size: 5vw;
        line-height:1;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    section.ip-section {
        height: 100vh;
    }

    

    .blue{
        color:rgb(67, 242, 255);
    }

</style>