<template>
    <a-layout-header class="fixed w-full z-[999] h-14 px-4 bg-[var(--color-bg-2)] border-b-2 border-zinc-800">
        <div class="flex justify-between items-center h-full">
            <div class="flex items-center">
                <h5 class="text-xl font-bold my-4">TSConfig Generator</h5>
            </div>
            <div class="flex-1"></div>
            <ul class="right-side">
                <li>
                    <a-button class="nav-btn" type="outline" :shape="'circle'" @click="handleGoGithub">
                        <template #icon>
                            <IconGithub/>
                        </template>
                    </a-button>
                </li>
            </ul>
        </div>
    </a-layout-header>
</template>

<script setup lang="ts">
import {IconGithub} from '@arco-design/web-vue/es/icon'

defineOptions({
    name: 'Header'
})

const handleGoGithub = () => {
    window.open(import.meta.env.VITE_GITHUB)
}
</script>

<style scoped lang="scss">
.right-side {
    @apply flex items-center m-auto;
    list-style: none;

    :deep(.locale-select) {
        border-radius: 20px;
    }

    li {
        display: flex;
        align-items: center;
        padding: 0 10px;
    }

    a {
        color: var(--color-text-1);
        text-decoration: none;
    }

    .nav-btn {
        border-color: rgb(var(--gray-2));
        color: rgb(var(--gray-8));
        font-size: 16px;
    }

    .trigger-btn,
    .ref-btn {
        position: absolute;
        bottom: 14px;
    }

    .trigger-btn {
        margin-left: 14px;
    }
}
</style>