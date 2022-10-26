<template>
    <section class="tracert-section">
        <h1>Main Titel</h1>
        <form id="ip" action="POST">
            <input type="text" placeholder="gib mal IP i">
            <button type="submit">Trace</button>
        </form>
        <div id="globe"></div>
    </section>
</template>
<style>
    #globe {
        height: 600px;
    }
</style>
