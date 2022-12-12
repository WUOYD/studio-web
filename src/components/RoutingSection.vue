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
                   <p>The server will respond with sending data back to the Requester.</p>
                </div>
            </div>
            <div class="section2 panel row-1">
                <routingSVG />
            </div>
            <div class="section3 panel row-1">
                <div class="text-wrapper">
                    <p class="text-big">The internet is a network with many <span class="stroke">nodes</span><span class="blue">.</span></p>
                    <p>These nodes are connected with eachother creating a system called world wide web (WWW). You can send and recieve data from all over the world, when you are connected with the Internet. Normally nodes try to send data in the most efficient way possible.</p>
                </div>
            </div>
            <div class="section4 panel row-2">
                <routingSVG2 />
            </div>
            <div class="section5 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">But what if a node in the network has an <span class="stroke">issue</span> and can’t work<span class="blue">?</span></p>
                   <p>The keyword for this problem is reliability. The Internet will still work, because other nodes will still be available and take over traffic from the malfunctioning node.</p>
                </div>
            </div>
            <div class="section6 panel row-2">
                <routingSVG3 />
            </div>
            <div class="section7 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">Usually <span class="stroke">big files</span> like audio or videos will not be transfered by a network as a whole<span class="blue">.</span></p>
                   <p>The keyword for this problem is reliability. The Internet will still work, because other nodes will still be available and take over traffic from the malfunctioning node.</p>
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
                   <p>TCP has a list with each package and its place and sorts all packages the correct way. The transfer is complete and the user can view the data.</p>
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
    }

    .section11 {
        margin-left: 15%;
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