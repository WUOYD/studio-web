<template>
    <section class="dns-section">
        <div class="wrapper">
            <div class="title-section panel">
                <div class="wrapper">
                    <div class="titel-wrapper">
                        <h2>The<br><span class="stroke">DNS Server</span></h2>
                    </div>
                </div>
            </div>
            <div class="section1 panel">
                <div class="text-wrapper">
                    <p class="text-big">A <span class="stroke">domain</span> consists two parts: the domain name and the top level domain<span class="blue">.</span></p>
                   <p>The domain name can be anything like your name or the name of a business. The top level domain (TLD) discribes the use of the domain. It can be a country specific TLD like .fr for france or a generic TLD like .com short for commercial which is used by businesses.</p>
                </div>
            </div>
            <div class="section2 panel">
                <div class="text-wrapper special-text text-big">
                   <div>www<span class="blue">.</span></div>
                   <div>google<span class="blue">.</span></div>
                   <div>com<span class="blue">.</span></div>
                </div>
            </div>
            <div class="section4 panel">
                <div class="text-wrapper">
                    <p class="text-big">Every Domain has assinged an IP adress as its <span class="stroke">alias</span><span class="blue">.</span></p>
                    <p>It’s much easier remembering the adress of a service like Google, when you don’t have to know a long IP adress and instead can use google.com.</p>
                </div>
            </div>
            <div class="section5 panel">
                <div class="text-wrapper text-big">
                   <div>www<span class="blue">.</span></div>
                   <div>TODO<span class="blue">.</span></div>
                   <div>com</div>
                </div>
                <div class="text-wrapper text-big">
                   <div>8<span class="blue">.</span></div>
                   <div>8<span class="blue">.</span></div>
                   <div>8<span class="blue">.</span></div>
                   <div>8</div>
                </div>
            </div>
            <div class="section6 panel">
                <div class="text-wrapper">
                    <p class="text-big">DNS is a service who works like a dynamic <span class="stroke">telephone book</span><span class="blue">.</span></p>
                   <p>But who knows which IP adress is TODO.com assigned to? Here comes the Domain Name System (DNS).  If you enter a domain the DNS translates it to an IP adress.</p>
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
        line-height:0.8;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    .title-section .stroke{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
    }

    section.dns-section .wrapper{
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

    .special-text > div:nth-of-type(2)::after {
        content: "name";
    }

    .special-text > div:nth-of-type(3)::after {
        content: "top level domain";
    }

    .special-text > div::after {
        position: absolute;
        top: 185%;
        left: 0;
        font-size: 25%;
        text-align: center;
        width: 100%;
    }

    .special-text > div:nth-of-type(2)::before,
    .special-text > div:nth-of-type(3)::before {
        content: "";
        border-left: 1px solid rgb(67, 242, 255);
        position: absolute;
        top: 100%;
        left: 50%;
        height: 80%;
    }

    section .text-big{
        font-size: 65px;
        line-height: 0.9;
        color: white;
        margin-bottom: 30px;
    }

    section.dns-section {
        height: 100vh;
    }

    .stroke{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        -webkit-text-fill-color: transparent;
    }

    .section4 {
        text-align: center;
        justify-content: center;
    }

    .section4 .text-wrapper {
        justify-content: center;
        padding-bottom: 5%;
    }

    .section5 .text-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }

    .section5 {
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

</style>

<script>
    export default {
        data: () => ({

        }),
        mounted() {
            function getPanelMarginLeft(){
                var width = document.querySelector(".dns-section .title-section.panel").offsetWidth;
                var windowWidth = window.innerWidth;
                return ((windowWidth - width) / 2);
            }

            document.querySelector(".dns-section .section1.panel").style.marginLeft = getPanelMarginLeft() + "px";
            //document.querySelector(".dns-section .section5.panel").style.marginLeft = getPanelMarginLeft() + "px";
        }
    }
</script>