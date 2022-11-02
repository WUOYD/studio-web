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
        </article>
    </main>
    <Footer />
</template>

<style scoped>
    header {
        line-height: 1.5;
        max-height: 100vh;
    }

    .logo {
        display: block;
        margin: 0 auto 2rem;
    }

    nav {
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 2rem;
    }

    nav a.router-link-exact-active {
        color: var(--color-text);
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid var(--color-border);
    }

    nav a:first-of-type {
        border: 0;
    }

   
</style>
