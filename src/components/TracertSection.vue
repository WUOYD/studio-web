<script setup> 
    import LoadingAnimation from './LoadingAnimation.vue'
</script>
<template>
    <section class="tracert-section">
        <div class="wrapper">
            <div class="sidebar">
                <div class="info"> 
                    <h2 id="infotitle">What is "What the Web"?</h2>
                    <p>What the web is an educational service for tracing routes of websites. The origin of tracing is always Switzerland. (Location of the webserver)</p>
                </div>
                <form id="ip">
                    <label for="domain">Trace a Domain</label>
                    <input id="domain" type="domain" required>
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
                <button type="button">More informations</button>
            </div>
            <div id="globe"></div>
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
        justify-content: flex-end;
    }

    section .sidebar {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0);
        max-height: 100%;
        color: white;
        margin-top: 3rem;
        padding: 1rem 1rem;
        width: 33.3333%;
        overflow-y: auto;
    }

    section .sidebar .location {
        opacity: 0;
        margin-top: 1rem;
    }

    section .loading-wrapper {
        display: flex;
        justify-content: center;
    }

    section form {
        display: flex;
        flex-direction: column;
    }

    form input {
        color: white;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 10px;
        margin: 5px 0 10px 0;
        padding: 3px 10px;
    }

    #info p{
        font-weight: 500;
    }

    form input:focus,
    form input:active {
        outline: 0;
    }

    #ip{
        margin-top: 2rem;
    }
    
    button{
        color: white;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 10px;
        margin: 5px 0 10px 0;
        padding: 3px 10px;
        width: 100%;
    }

    #globe {
        width: 66.6666%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
    }
    
</style>
