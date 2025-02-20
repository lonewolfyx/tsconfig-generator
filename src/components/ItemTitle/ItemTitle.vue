<template>
    <a-typography>
        <a-typography-title>{{ title }}</a-typography-title>
    </a-typography>
</template>

<script setup lang="ts">
defineOptions({
    name: 'ItemTitle'
})

const {title} = defineProps(['title'])
</script>
