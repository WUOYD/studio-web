<script setup>
    import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
    <main>
        <TheWelcome />
        <form id="ip" action="POST">
            <input type="text" placeholder="gib mal IP i">
            <button type="submit">Trace</button>
        </form>
        <div id='map' style='width: 100%; height: 100%;'></div>
    </main>
</template>
