<template>
    <section class="ip-section">
        <div class="text-wrapper">
            <h2 class="text-3xl font-bold underline text-blue-600">IP Section</h2>
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
    section.ip-section {
        display: flex;
        flex-direction: row;
    }

    .img-wrapper {
        padding-left: 15px;
    }

    .text-wrapper {
        padding-right: 15px;
    }

    section > div {
        width: 50%;
    }

    .img-wrapper img {
        width: 50%;
        object-fit:contain;
    }
</style>
