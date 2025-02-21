<template>
    <a-col :span="8">
        <ItemTitle title="Emit"/>

        <a-col :span="24" v-for="item in inputFields" :key="useId()">
            <a-form-item :field="item" :label="item" :extra="$t(`compilerOptions.${item}`)">
                <a-input
                    v-model="queryParams.compilerOptions[item]"
                    allow-clear
                    :placeholder="createPlaceholder(item)"
                />
            </a-form-item>
        </a-col>

        <a-col :span="24" v-for="item in fields" :key="useId()">
            <a-form-item :field="item" :extra="$t(`compilerOptions.${item}`)">
                <a-switch type="round" v-model="queryParams.compilerOptions[item]"/>
                <span class="pl-4 text-[var(--color-text-2)]">{{ item }}</span>
            </a-form-item>
        </a-col>
    </a-col>
</template>

<script setup lang="ts">
import {useId} from "vue";
import ItemTitle from "@/components/ItemTitle/ItemTitle.vue";
import {createPlaceholder} from "@/utils";

defineOptions({
    name: 'EmitPlugin'
})

const fields = [
    'declaration',
    'declarationMap',
    'downlevelIteration',
    'emitBOM',
    'emitDeclarationOnly',
    'importHelpers',
    'inlineSourceMap',
    'inlineSources',
    'noEmit',
    'noEmitHelpers',
    'noEmitOnError',
    'preserveConstEnums',
    'removeComments',
    'sourceMap'
]

const inputFields = [
    'mapRoot',
    'outDir',
    'outFile',
    'sourceRoot'
]

const {queryParams} = defineProps(['queryParams']);

</script>

<style scoped>

</style>
