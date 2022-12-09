<template>
    <section id="dns-section" class="dns-section">
        <div class="wrapper">
            <div class="title-section panel row-1">
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
            <div class="section2 panel row-2">
                <div class="setDomain text-wrapper special-text text-big">
                   <div><span class="d">www</span><span class="blue">.</span></div>
                   <div><span class="d">google</span><span class="blue">.</span></div>
                   <div><span class="d">com</span></div>
                </div>
            </div>
            <div class="section4 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">Every Domain has assinged an IP adress as its <span class="stroke">alias</span><span class="blue">.</span></p>
                    <p>It’s much easier remembering the adress of a service like Google, when you don’t have to know a long IP adress and instead can use google.com.</p>
                </div>
            </div>
            <div class="section5 panel row-2">
                <div class="setDomain text-wrapper text-big">
                   <div><span class="d">www</span><span class="blue">.</span></div>
                   <div><span class="d">google</span><span class="blue">.</span></div>
                   <div><span class="d">com</span></div>
                </div>
                <div class="ip-locate text-wrapper text-big">
                   <div><span class="i">8</span><span class="blue">.</span></div>
                   <div><span class="i">8</span><span class="blue">.</span></div>
                   <div><span class="i">8</span><span class="blue">.</span></div>
                   <div><span class="i">8</span></div>
                </div>
            </div>
            <div class="section6 panel row-2">
                <div class="text-wrapper">
                    <p class="text-big">DNS is a service who works like a dynamic <span class="stroke">telephone book</span><span class="blue">.</span></p>
                   <p>But who knows which IP adress is <span class="d">www.google.com</span> assigned to? Here comes the Domain Name System (DNS).  If you enter a domain the DNS translates it to an IP adress.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .section2 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-left: -25%;
    }

    .section5 .text-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        margin-left: -20%;
    }

    .section5 {
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
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