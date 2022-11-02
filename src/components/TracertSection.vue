<template>
    <section class="tracert-section bg-black h-screen text-white grid grid-cols-12 grid-rows-5">
        <div id="globe"></div>
        <div class="border-2 rounded flex items-center w-50 h-10 col-start-2 col-span-3 row-start-5">
           <div class="mx-2">Search a domain</div> 
            </div>


            <form>
                <label>Domain</label>
                <input type="domain" required>

            </form>
    </section>
</template>
<style>
    #globe {
        position: absolute;
        left: 20vw;
        top: 10vh;
        height: 600px;
        width: 600px;
    }

    
</style>
