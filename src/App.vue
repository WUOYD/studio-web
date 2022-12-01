<script setup> 
    import Header from './components/Header.vue'
    import IpSection from './components/IpSection.vue'
    import DnsSection from './components/DnsSection.vue'
    import RoutingSection from './components/RoutingSection.vue'
    import Footer from './components/Footer.vue'
</script>
<template>
    <Header />
    <main>
        <aside>
            <div class="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a class="stroke" href="#"><span>Trace Domains</span></a>
                        </li>
                        <li>
                            <a class="stroke" href="#"><span>The ID-Adress</span></a>
                        </li>
                        <li>
                            <a class="stroke" href="#"><span>The DNS-Server</span></a>
                        </li>
                        <li>
                            <a class="stroke" href="#"><span>The Routing</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
        <article>
            <IpSection />
            <DnsSection />
            <RoutingSection />
        </article>
    </main>
    <Footer />
</template>

<style scoped>

   
</style>
