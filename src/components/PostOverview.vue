<template>
    <div>
        <article v-for="{ slug, collection, data }  in posts">
            <h2>
                <a :href="`/${collection}/${slug}`">
                    {{ data.title }}
                </a>
            </h2>
            <PostDateAndAuthor :date="data.date" :author="data.author" />
        </article>
    </div>
</template>

<style>
a {
    color: rgb(63, 129, 230);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>

<script lang="ts" setup>
import PostDateAndAuthor from './PostDateAndAuthor.vue';

interface Frontmatter {
    id: number;
    title: string;
    date: Date;
    author: string;
    tags: string[];
    file: string,
    url: string;
}
interface Post {
    id: string,
    slug: string,
    body: string,
    collection: string,
    data: Frontmatter,
}
const { posts } = defineProps({
    posts: {
        type: Array as () => Post[],
        required: true
    }
});
</script>