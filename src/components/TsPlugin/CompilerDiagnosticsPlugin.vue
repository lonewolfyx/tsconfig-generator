<template>
    <a-col :span="8">
        <ItemTitle title="Compiler Diagnostics"/>

        <a-col :span="24" v-for="item in fields" :key="useId()">
            <a-form-item field="noErrorTruncation" :extra="$t(`compilerOptions.${item}`)">
                <a-switch type="round" v-model="queryParams.compilerOptions[item]"/>
                <span class="pl-4 text-[var(--color-text-2)]">{{ item }}</span>
            </a-form-item>
        </a-col>

    </a-col>
</template>

<script setup lang="ts">
import {useId} from "vue";
import ItemTitle from "@/components/ItemTitle/ItemTitle.vue";

defineOptions({
    name: 'CompilerDiagnosticsPlugin'
})

const fields = [
    'extendedDiagnostics',
    'listEmittedFiles',
    'listFiles',
    'noCheck',
    'traceResolution',
];

const {queryParams} = defineProps(['queryParams']);

</script>

<style scoped>

</style>
