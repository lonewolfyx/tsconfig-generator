<template>
    <a-col :span="8">
        <ItemTitle title="Language and Environment"/>

        <a-col :span="24">
            <a-form-item field="lib" label="lib" :extra="$t(`compilerOptions.lib`)">
                <a-select
                    v-model="queryParams.compilerOptions.lib"
                    multiple
                    allow-clear
                    :placeholder="createPlaceholder('lib')"
                >
                    <a-option v-for="item in libs" :key="useId" :value="item" :label="item"/>
                </a-select>
            </a-form-item>
        </a-col>

        <a-col :span="24">
            <a-form-item field="moduleDetection" label="moduleDetection" :extra="$t(`compilerOptions.moduleDetection`)">
                <a-select
                    v-model="queryParams.compilerOptions.moduleDetection"
                    allow-clear
                    :placeholder="createPlaceholder('moduleDetection')"
                >
                    <a-option v-for="item in moduleDetections" :key="useId" :value="item" :label="item"/>
                </a-select>
            </a-form-item>
        </a-col>

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
import {LanguageEnvironmentEnum} from "@/enum/LanguageEnvironmentEnum.ts";
import {ModuleDetectionEnum} from "@/enum/moduleDetectionEnum.ts";
import {createPlaceholder} from "@/utils";

defineOptions({
    name: 'LanguageAndEnvironmentPlugin'
})

const fields = [
    'emitDecoratorMetadata',
    'experimentalDecorators',
    'noLib',
    'useDefineForClassFields',
];

const {queryParams} = defineProps(['queryParams']);

const libs = Object.values(LanguageEnvironmentEnum);
const moduleDetections = Object.values(ModuleDetectionEnum)
</script>

<style scoped>

</style>
