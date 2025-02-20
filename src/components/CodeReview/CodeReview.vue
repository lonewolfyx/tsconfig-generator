<template>
    <a-card title="tsconfig.json" class="rounded-lg m-4" ref="codeRef">
        <template #extra>
            <a-button @click="handleClipboard">
                <template #icon>
                    <IconCopy/>
                </template>
            </a-button>
        </template>
        <vue-json-pretty
            :data="removeEmptyValues(queryParams)"
            theme="dark"
        />
    </a-card>
</template>

<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import {useTsConfigStore} from "@/stores/tsconfig.ts";
import {Notification} from '@arco-design/web-vue';
import {storeToRefs} from "pinia";
import {removeEmptyValues, sort} from "@/utils";
import {IconCopy} from '@arco-design/web-vue/es/icon';

defineOptions({
    name: 'CodeReview'
})

const tsConfigStore = useTsConfigStore()
const {queryParams} = storeToRefs(tsConfigStore);

const handleClipboard = () => {
    const prettyTSConfig = JSON.stringify(sort(removeEmptyValues(queryParams.value)), null, 2);
    navigator.clipboard.writeText(prettyTSConfig);
    Notification.success({
        title: 'Congratulations',
        content: 'Replicating Success 🎉 🎉 🎉 🎉',
        closable: true,
    })
}
</script>

<style scoped lang="scss">
:deep(.arco-card-body) {
    @apply relative overflow-x-auto;
    height: calc(100vh - 130px);
}

:deep(.vjs-tree-node .vjs-indent-unit) {
    @apply w-8;
}
</style>