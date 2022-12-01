<template>
    <footer>
        <div class="wrapper">
            <div class="footer-cell" id="left">
                HSLU Digital Ideation
            </div>
            <div class="footer-cell" id="mittle">
                ©<span id="year"></span> 
            </div>
            <div class="footer-cell" id="right">
                <a href="impressum.html">Impressum</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.wrapper{
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    border-top: 1px solid white;
}

.footer-cell{
    position: relative;
    width: 33.3333%;
    margin: auto;
}

#left{
    text-align: left;
}
#mittle{
    text-align: center;
}
#right {
    text-align: right;
}

#right a{
    color: white;
    text-decoration: none;
}

</style>

<script>
    export default {
        data: () => ({

        }),
        mounted() {
            document.getElementById("year").innerHTML = new Date().getFullYear();
        }
    }
</script>

