<template>
    <section class="IpTitleSection">
        <div class="wrapper">
            <div class="titel-wrapper">
            <h2>The</h2>
            <h2 class="stroke">IP ADRESS</h2>
            
            </div>
           
        </div>
    </section>
</template>

<style scoped>
    section.IpTitleSection {
        height: 100vh;
    }

.titel-wrapper{
    
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;
    
}
    h2 {
          font-weight: 600;
        color: white;
        font-size: 4vw;
        line-height:0.8;
        z-index:  1;
        font-family: 'Roboto', sans-serif;
        
    }
.stroke{
      -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: rgb(67, 242, 255);
        -webkit-text-fill-color: transparent;
            margin-left: 185px;

}

    p {
        font-size: 50px;
    }
</style>