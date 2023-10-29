<template>
    <div class="row vh-100 m-0 vw-100 d-flex">
        <div class="d-none d-md-block col-md-3"></div>
        <div class="col-12 col-md-6 p-3 p-md-4">
            <div>
                <a :href="`/${collection}`">Back</a>
            </div>
            <!-- Title -->
            <h1 class="text-4xl font-bold text-center py-4 px-1">{{ title }}</h1>
            <!-- Date and Author -->
            <PostDateAndAuthor :author="author" :date="date" />
            <hr class="border" />
            <!-- Content -->
            <div class="px-1">
                <slot />
            </div>
            <hr class="border" />
            <!-- Tags -->
            <PostTags :tags="tags" />
        </div>
        <div class="d-none d-md-block col-md-3"></div>
    </div>
</template> 

<script lang="ts" setup>
import PostDateAndAuthor from "./PostDateAndAuthor.vue";
import PostTags from "./PostTags.vue";


interface Frontmatter {
    id: number
    title: string
    date: Date
    author: string
    tags: string[]
    file: string,
    url: string
}
const { frontmatter, collection } = defineProps({
    frontmatter: {
        type: Object as () => Frontmatter,
        required: true
    },
    collection: {
        type: String,
        required: true
    }
})

const { date, author, title, tags } = frontmatter;

</script>