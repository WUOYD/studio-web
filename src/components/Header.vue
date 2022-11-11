<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    header {
        height: 200vh;
        z-index: 2;
     
    }

    header .header-item:last-of-type{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
    }

    .header-item{
        font-weight: 600;
        color: white;
        font-size: 5vw;
        line-height:0.8;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
    }

    header .header-wrapper {
        width: 100%;
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
        transform: translateX(0%);
    }
    .header-wrapper div:nth-of-type(3){
        transform: translateX(100%);
    }

    .header-wrapper p {
        max-width: 70%;
        text-align: center;
        padding-top: 50px;
        font-size: 20px;
        color: white;
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
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




<template>
    <header>
        <div class="header-wrapper">
            <div class="header-item sp">WHAT</div>
            <div class="header-item sp">THE</div>
            <div class="header-item ">WEB</div>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <form id="ip">
                <label for="domain">Trace a Domain</label>
                <input id="domain" placeholder="example-domain.com" type="domain" required>
                <button type="button trace-btn">Trace</button>
            </form>
        </div>
   </header>
</template>