<script setup>
    import routingSVG from './routingSVG.vue'
    import routingSVG2 from './routingSVG2.vue'
    import routingSVG3 from './routingSVG3.vue'
    import routingSVG4 from './routingSVG4.vue'
    import routingSVG5 from './routingSVG5.vue'
</script>
<template>
    <section id="routing-section" class="routing-section">
        <div class="wrapper">
            <div class="title-section panel">
                <div class="wrapper">
                    <div class="titel-wrapper">
                        <h2>The<br><span class="stroke">Routing</span></h2>
                    </div>
                </div>
            </div>
            <div class="section1 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">After a connection is established, a computer can <span class="stroke">request data</span> from a server like a picture or a document<span class="blue">.</span></p>
                   <p>The server will respond with sending data back to the requester.</p>
                </div>
            </div>
            <div class="section2 panel row-1">
                <routingSVG />
            </div>
            <div class="section3 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">The internet is a network with many <span class="stroke">nodes</span><span class="blue">.</span></p>
                    <p>These nodes are connected with eachother creating a system called world wide web (WWW). You can send and recieve data from all over the world, when connected to the Internet. Normally nodes try to send data in the most efficient way possible.</p>
                </div>
            </div>
            <div class="section4 panel row-2">
                <routingSVG2 />
                <img id="routingMobile1" src="../assets/routingMobile1.png">
            </div>
            <div class="section5 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">But what if a node in the network has an <span class="stroke">issue</span> and cannot work properly<span class="blue">?</span></p>
                   <p>The keyword for this problem is reliability. The Internet will still work, because other nodes are available and take over traffic from the malfunctioning node.</p>
                </div>
            </div>
            <div class="section6 panel row-2">
                <routingSVG3 />
            </div>
            <div class="section7 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">Usually <span class="stroke">big files</span> like audio or videos will not be transfered by a network as a whole<span class="blue">.</span></p>
                </div>
            </div>
            <div class="section8 panel row-1">
                <routingSVG4 />
            </div>
            <div class="section9 panel row-3">
                <div class="text-wrapper">
                    <p class="text-big">The different parts of the file can be transported <span class="stroke">in any given order</span><span class="blue">.</span></p>
                </div>
            </div>
            <div class="section10 panel row-1">
                <routingSVG5 />
            </div>
            <div class="section11 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">When all packages have arrived at the requester, the network protocol called <span class="stroke">TCP</span> will rearange the recieved data<span class="blue">.</span></p>
                   <p>TCP has a list with each package. After receiving the data TCP sorts all packages in the correct order. The transfer is complete and the user can view the data.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section2 {
        margin-left: -20%;
        min-width: 105% !important;
    }

    .section2::before {
        background: none !important;
    }

    #routingMobile1 {
        display: none;
    }

    .section1::after {
        content: "";
        position: absolute;
        background-color: black;
        top: calc(-100vh / 6);
        height: 100vh;
        width: 120%;
        left: 90%;
        z-index: -1
    }

    .section4,
    .section6 {
        margin-left: -10%;
        min-width: 115% !important;
    }

    .section8 {
        margin-left: -20%;
        max-width: 90% !important;
        min-width: 90% !important;
    }

    .section10 {
        margin-left: -15%;
        max-width: 60% !important;
        min-width: 60% !important;
        padding-right: 15%;
    }

    @media only screen and (max-width: 1199.98px) {
        .section2,
        .section8 {
            padding-right: 10%;
        }
    }

    @media only screen and (max-width: 991.98px) {
        .section2,
        .section4,
        .section6,
        .section8,
        .section10 {
            min-width: 100% !important;
            max-width: 100% !important;
        }

        .section2,
        .section8,
        .section10 {
            padding-top: unset;
            padding-right: unset;
        }

        .section2 svg,
        .section4 svg,
        .section6 svg,
        .section8 svg,
        .section10 svg {
            width: 100%;
            height: auto;
            object-fit: contain;
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 767.98px) {
        
    }

    @media only screen and (max-width: 399.98px) {
        .section4 svg {
            display: none;
        }

        #routingMobile1 {
            display:block;
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