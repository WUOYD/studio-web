<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    header {
        height: 250vh;
     
    }

    header .header-item:last-of-type{
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
    }

    .header-item{
        font-weight: 600;
        color: white;
        font-size: 4vw;
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

</style>




<template>
    <header>
        <div class="header-wrapper">
            <div class="header-item sp">WHAT</div>
            <div class="header-item sp">THE</div>
            <div class="header-item ">WEB</div>
        </div>
   </header>
</template>