<template>
    <div class="justify-content-end d-flex px-1">
        <div>
            <i class="fa-solid fa-calendar-days pr-2"></i>
            {{ formattedDate }}
        </div>
        <!-- <div>
            <i class="fa-solid fa-user pr-2"></i>
            {{ author }}
        </div> -->
    </div>
</template>

<script lang="ts" setup>
const { date, author } = defineProps({
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

const formattedDate = date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "long",
})

</script>