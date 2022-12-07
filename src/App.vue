<script setup> 
    import Header from './components/Header.vue'
    import IpSection from './components/IpSection.vue'
    import DnsSection from './components/DnsSection.vue'
    import RoutingSection from './components/RoutingSection.vue'
    import Footer from './components/Footer.vue'
</script>
<template>
    <div id="hamburger" class="hamburger">
        <div class="top-bun"></div>
        <div class="meat"></div>
        <div class="bottom-bun"></div>
    </div>
    <Header />
    <aside>
        <div class="sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="#">Trace Domains</a>
                    </li>
                    <li>
                        <a href="#">IP-Adress</a>
                    </li>
                    <li>
                        <a href="#">DNS-Server</a>
                    </li>
                    <li>
                        <a href="#">Routing</a>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    <main>
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
