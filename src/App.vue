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
