<template>
    <footer>
        <div class="wrapper">
            <div class="footer-cell" id="left">
                <span>HSLU Digital Ideation</span><span class="mobile">HSLU DI</span>
            </div>
            <div class="footer-cell" id="mittle">
                ©<span>{{year}}</span>
            </div>
            <div class="footer-cell" id="right">
                <a href="about.html">About</a>
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
    color: white;
}

#left > span.mobile {
    display: none;
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

@media only screen and (max-width: 575.98px) {
    #left > span {
        display: none;
    }

    #left > span.mobile {
        display: block;
    }
}

</style>

<script>
    export default {
        data: () => ({
            year: new Date().getFullYear()
        }),
    }
</script>

