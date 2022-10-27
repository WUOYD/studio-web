<template>
    <section class="dns-section text-right-img">
        <div class="text-wrapper">
            <h2>DNS Section</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br><br>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="img-wrapper">
            <img src="@/assets/ip1.jpg">
            <img src="@/assets/ip2.jpg">
            <img src="@/assets/ip3.jpg">
            <img src="@/assets/ip4.jpg">
        </div>
    </section>
</template>

<style scoped>
    section .img-wrapper img {
        width: 50%;
        object-fit:contain;
    }

    section .img-wrapper {
        display: flex;
        flex-wrap: wrap;
    }  

    section.dns-section {
        flex-direction: row-reverse;
    }

    section .img-wrapper {
        padding-right: 15px;
    }

    section .text-wrapper {
        padding-left: 15px;
    }
</style>
