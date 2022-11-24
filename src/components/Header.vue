<template>
    <header>
        <h1 style="display: none;">What the World Wide Web</h1>
        <div class="header-wrapper">
            <div class="header-item sp">WHAT</div>
            <div class="header-item sp">THE</div>
            <div class="header-item ">WORLD</div>
            <div class="header-item ">WIDE</div>
            <div class="header-item ">WEB</div>
            <a class="scroller" href="#track-domain">Scroll to discover</a>
            <p class="info">A journey through the <span class="stroke">internet</span><span class="blue">.</span></p>
        </div>
        <div id="track-domain" class="h-wrapper">
            <div class="trace-section">
                <div class="sidebar">
                    <form class="tracert-form" id="section-form">
                        <input class="domain" placeholder="example-domain.com" type="domain" required>
                        <button class="submitbutton" type="submit">Trace</button>
                    </form>
                    <ul class="locations"></ul>
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
                <button id="explore-button">Explore how it works</button>
            </div>
            <div class="cta-wrapper">
                <p>Enter a domain to track the network path of a <span class="stroke">website</span><span class="blue">.</span></p>
                <form class="tracert-form" id="header-form">
                    <label for="domain">Trace a Domain</label>
                    <input class="domain" placeholder="example-domain.com" type="domain" required>
                    <button type="submit">Trace</button>
                </form>
                <div class="tracert-loading">
                    <p style="position: absolute;" class="error">Error: Tracing your Domain</p>
                    <p class="loading-dots">tracing started</p>
                    <p class="loading-dots">searching for the next hops</p>
                    <p class="loading-dots">locating <span></span></p>
                </div>
            </div>
        </div>
        <div id="globe-wrapper"><div id="globe"></div></div>
   </header>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    header {
        height: 450vh;
        z-index: 2;
    }

    header .cta-wrapper .tracert-loading {
        position: absolute;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        justify-content:  flex-start;
        align-items: flex-start;
    }

    header .cta-wrapper .tracert-loading p {
        text-align: left;
        width: 100%;
        font-size: 25px;
        margin-top: 15px;
        opacity: 0;
    }

    header .trace-section {
        opacity: 0;
        display: none;
        height: calc(100% - 2 * 60px);
        width: 45%;
        margin-top: 60px;
        z-index: 5;
        padding-bottom: 60px;
    }

    header .trace-section form {
        display: flex;
    }

    header .trace-section form input {
        width: 70%;
    }

    header .trace-section form button {
        width: 30%;
    }

    header .sidebar {
        overflow-y: auto;
        background-color: rgba(0,0,0, 0.9);
        height: 100%;
        padding: 15px 30px;
    } 

    header #explore-button {
        width: 100%;
        border-radius: 5px;
        position: absolute;
        bottom: 0;
    }

    header .sidebar .locations {
        font-size: 18px;
        padding-left: 25px;
        color: white;
        margin-top: 30px;
    }

    header .h-wrapper{
        position: absolute;
        top: 350vh;
        width: 100%;
        height: 100vh;
    }

    header .cta-wrapper::before {
        content: "";
        position: absolute;
        left: -100vw;
        width: 200vw;
        background: linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0, 0.6) 40%, rgba(0,0,0, 0.6) 85%, rgba(0, 0, 0, 0) 100%);
        height: 120vh;
        bottom: 0;
    }

    header .cta-wrapper {
        width: 100%;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        display: flex;
        justify-content: center;
    }

    header .cta-wrapper p {
        font-size: 65px;
        line-height: 0.9;
        color: white;
        width: 50%;
        text-align: center;
        font-weight: 500;
    }

    header .scroller {
        position: absolute;
        text-decoration: none;
        cursor: pointer;
        padding: 10px 5px;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 18px;
        animation: scale 1s ease-in-out infinite alternate
    }

    @keyframes scale {
        0% {
            transform: translateX(-50%) scale(1.0);
        }
        100% {
            transform: translateX(-50%) scale(1.05);
        }
    }

    header .info {
        font-size: 65px;
        line-height: 0.9;
        color: white;
        position: absolute;
        top: 130vh;
        font-weight: 500;
        left: 0;
        width: 100%;
        text-align: center;
    }

    header .header-item:nth-of-type(n+3){
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
    }

    .header-item{
        font-weight: 600;
        color: white;
        font-size: 6.5vw;
        line-height:0.9;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    header .header-wrapper {
        width: 100%;
        position: relative;
    }

    .header-wrapper{
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .header-wrapper div:nth-of-type(1){
        transform: translateX(-80%);
    }
    .header-wrapper div:nth-of-type(2){
        transform: translateX(-60%);
    }
    .header-wrapper div:nth-of-type(3){
        transform: translateX(0%);
    }
    .header-wrapper div:nth-of-type(4){
        transform: translateX(60%);
    }
    .header-wrapper div:nth-of-type(5){
        transform: translateX(120%);
    }

    #header-form {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }

    form {
        justify-content: flex-start;
    }

    form label {
        display: none;
    }

    form button {
        border-radius: 5px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    form input {
        color: white;
        border: 2px solid white;
        background-color: transparent;
        border-radius: 5px;
        padding: 10px 10px;
        width: 40%;
        font-size: 20px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none;
    }

    #info p{
        font-weight: 500;
    }

    form input:focus,
    form input:active {
        outline: 0;
    }
    
    button{
        width: 20%;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

</style>




