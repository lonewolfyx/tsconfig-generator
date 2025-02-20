<template>
    <a-layout class="relative flex flex-col flex-1 m-0 p-0 h-full">
        <Header/>
        <a-layout-content class="relative h-full pt-[50px]">
            <div class="grid grid-cols-3 tsconfig-container">
                <TsConfiguration/>
                <CodeReview/>
            </div>
        </a-layout-content>
    </a-layout>
</template>

<script setup lang="ts">
import TsConfiguration from "@/components/TsConfiguration/TsConfiguration.vue";
import CodeReview from "@/components/CodeReview/CodeReview.vue";
import Header from "@/layout/component/Header.vue";

defineOptions({
    name: 'LayoutIndex'
})
</script>

<style scoped lang="scss">
.tsconfig-container {
    height: calc(100vh - 50px);
}
</style>