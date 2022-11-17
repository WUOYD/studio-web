<script setup> 
    import LoadingAnimation from './LoadingAnimation.vue'
</script>
<template>
    <section id="Trace-Domain" class="tracert-section">
        <div class="wrapper">
            <div class="sidebar">
                <div class="info"> 
                    <h3>Enter a domain to trace</h3>
                </div>
                <form class="tracert-form" id="section-form">
                    <label for="domain">Trace a Domain</label>
                    <input class="domain" placeholder="example-domain.com" type="domain" required>
                    <button class="submitbutton" type="submit">Trace</button>
                </form>
                <div class="locations"></div>
                <!-- <LoadingAnimation /> -->
                <div class="loading-wrapper">
                    <div class="loading">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div class="bottombar">
                <button class="morebutton" type="button" href="#Explore">Learn more about networks</button>
            </div>
        </div>
    </section>
</template>
<style scoped>
    section.tracert-section{
        height: 100vh;
    }

    section .wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    section .sidebar {
        position: relative;
        margin-top: 2rem;
        margin-bottom: 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        height: 90%;
        color: white;
        padding: 1rem 1rem;
        width: 35%;
        overflow-y: auto;
        z-index: 2;
    }

    section .sidebar .location {
        opacity: 0;
        margin-top: 1rem;
    }

    section .loading-wrapper {
        display: flex;
        justify-content: center;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    form label {
        display: none;
    }

    form input {
        color: white;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 15px;
        padding: 10px 10px;
        width: 70%;
        font-size: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
    }

    .info h3{
        font-weight: 500;
        margin-left: 12px;
    }

    form input:focus,
    form input:active {
        outline: 0;
    }
    
    .submitbutton{
        width: 30%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        position: relative;
    }

    .bottombar{
        text-align: center;
        z-index: 2;
        height: 10%;
    }
    .morebutton{
        width: 30%;
    }

/*
    #globe {
        width: 100vw;
        height: 100vw;
        position: absolute;
        top: -190%;
        left: -29%;
        right: 0;
    }

    #globe canvas {
        width: 100%;
        height: 100%;
    }*/
    
</style>
