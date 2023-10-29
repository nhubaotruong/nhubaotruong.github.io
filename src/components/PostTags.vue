<template>
    <span class="badge bg-primary text-white mx-1" v-for="tag in tags">
        {{ tag }}
    </span>
</template>

<script lang="ts" setup>
const { tags } = defineProps({
    tags: {
        type: Array as () => string[],
        required: true
    }
})
</script>