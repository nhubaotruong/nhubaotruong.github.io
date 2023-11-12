<template>
    <h1 class="text-center mt-5 fw-semibold">
        Contacts:
    </h1>
    <div class="text-center d-flex justify-content-center mt-4 w-100">
        <h1 class="mx-2" v-for="contactInfo in contactInfos">
            <a :href="contactInfo.link" target="_blank">
                <i :class="[`fa-xl`, contactInfo.class]" style="color: white;"></i>
            </a>
        </h1>
    </div>
</template>

<script lang="ts" setup>

const contactInfos = [
    { class: "fa-brands fa-github", link: "https://github.com/nhubaotruong/" },
    { class: "fa-brands fa-linkedin", link: "https://linkedin.com/in/nhubaotruong/" },
    { class: "fa-solid fa-inbox", link: "mailto:baoprokute1234@gmail.com" },
];
</script>