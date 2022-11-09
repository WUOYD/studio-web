<script setup> 
    import LoadingAnimation from './LoadingAnimation.vue'
</script>
<template>
    <section class="tracert-section">
        <div class="wrapper">
            <div id="globe"></div>
            <div class="sidebar">
                <form id="ip">
                    <label for="domain">Trace a Domain</label>
                    <input id="domain" type="domain" required>
                </form>
                <div class="locations"></div>
                <!-- <LoadingAnimation /> -->
                <!-- <div class="loading-wrapper">
                    <div class="loading">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<style>
    section.tracert-section{
        height: 100vh;
    }

    #globe {
        width: 100%;
        height: 600px;
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

    form input:focus,
    form input:active {
        outline: 0;
    }

    section .wrapper {
        position: relative;
        height: 100%;
    }

    section .sidebar {
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(255, 255, 255, 0.1);
        max-height: 100%;
        color: white;
        border-radius: 15px;
        padding: 20px 15px;
        width: 300px;
        overflow-y: auto;
    }

    section .sidebar .location {
        opacity: 0;
        margin-top: 10px;
    }

    section .loading-wrapper {
        display: flex;
        justify-content: center;
    }

    
</style>
