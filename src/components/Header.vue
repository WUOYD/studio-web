<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>


<template>
    <header class="bg-black h-screen text-white grid grid-cols-12 grid-rows-3"> <!--place-items-center-->

     <transition
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    >
         <div id= "text1" class="col-start-1 row-start-1 bigFont">WHAT</div>
    </transition>
       
     <transition  
     appear
    @before-enter="beforeEnter"
    @enter="enter"
    >  
        <div class="col-start-3 row-start-2 bigFont ">THE</div>
    </transition>
    
    
    <transition 
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    
    >
       <div class="col-end-12 col-span-7 row-start-3 bigFont text-right">WEB</div>
    </transition>
      
 
    
   
    
    </header>
</template>

<script>
import gsap from 'gsap'


export default{
    setup() {
        const beforeEnter= (el) =>{
            el.style.transform='translateX(-400px)'
           
        }
    
        const enter= (el) =>{
            gsap.to(el, {
                duration:1,
                x:0,

            })
        }
        
        
        return{beforeEnter,enter}
    }
}

</script>



<style scoped>
.bigFont{
    font-size: 40vh;
    line-height: 90%;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;

}

#text1{

}


</style>








