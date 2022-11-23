<script setup> 
    import Header from './components/Header.vue'
    import TracertSection from './components/TracertSection.vue'
    import IpSection from './components/IpSection.vue'
    import DnsSection from './components/DnsSection.vue'
    import RoutingSection from './components/RoutingSection.vue'
    import Footer from './components/Footer.vue'
</script>
<template>
    <Header />
    <main>
        <article>
            <TracertSection />
            <IpSection />
            <DnsSection />
            <RoutingSection />
            <Footer />
        </article>
    </main>
    <Footer />
</template>

<style scoped>

   
</style>
