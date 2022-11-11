<script setup> 
    import LoadingAnimation from './LoadingAnimation.vue'
</script>
<template>
    <section id="Trace-Domain" class="tracert-section">
        <div class="wrapper">
            <div class="sidebar">
                <div class="info"> 
                    <h2 id="infotitle">What is "What the Web"?</h2>
                    <p>What the web is an educational service for tracing routes of websites. The origin of tracing is always Switzerland. (Location of the webserver)</p>
                </div>
                <h3>Locations Untertitel</h3>
                <p style="color:red;"><span style="color: yellow;">Note a mini team mates:</span> dmarker werdet nonig gsetzt aber isch easy zum mache... mer müsst no irgendwie was finde zum arcs zeichne oder sie geil zverbinde :)<br><br> de explore button han ich eifach mal irgendwie platziert und gstylet (header au) aber das chan ja de fabian no apasse (btw das mit em agschnittene globe im header und denn abe animiere han ich au versuecht mache, dunkt mich easy schwer zum mache also vlt lieber irgendwie anderscht löse)<br><br>btw de p tag chammer lösche wenn ihrs glese hend p.s gang jetzt go penne es isch 2 am morge han no ganz viel sache gfixt und ufgrumt hoffe mer checkt alles no</p>
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
            <button class="button" type="button" href="#Explore">Explore More</button>
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

    h3 {
        margin-top: 30px;
    }

    section .sidebar {
        position: absolute;
        left: 0;
        top: 75px;
        background-color: rgba(255, 255, 255, 0.1);
        max-height: calc(90% - 2 * 75px);
        height: calc(90% - 2 * 75px);
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
    
    button{
        width: 30%;
        position: absolute;
        bottom: 75px;
        left: 0;
        z-index: 2;
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
