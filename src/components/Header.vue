<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

header {
    color: white;
}
</style>


<template>
    <header>
        <div>WHAT</div>
        <div>THE</div>
        <div>WEB</div>    
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



        gsap.to('#text1', {
          xPercent: -150,
          ease: "none",
          scrollTrigger: {
            trigger: "#text1",
            start: "top center",
            end: "bottom top",
            scrub: true
        }
    })


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








