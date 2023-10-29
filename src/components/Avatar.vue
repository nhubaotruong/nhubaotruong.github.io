<template>
    <h1 class="justify-content-center align-items-center d-flex">
        <img src="/avatar.webp" alt="avatar" class="img-fluid rounded-circle" style="height: 7.5em" />
    </h1>
    <h1 class="text-center py-4 fw-semibold">Trương Như Bảo</h1>
    <h3 class="text-center">Backend Engineer (you can tell from the css)</h3>
    <h3 class="text-center">GNU/Linux user and gamer (Arch BTW)</h3>
    <h3 class="text-center" @click="openLink(`aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==`)">sometimes a
        Rick Roller</h3>
</template>
<script lang="ts" setup>
const openLink = (link: string) => window.open(atob(link), "_blank");
</script>
