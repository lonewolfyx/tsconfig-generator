<template>
    <a-col :span="8">
        <ItemTitle title="Backwards Compatibility"/>

        <a-col :span="24">
            <a-form-item
                field="charset"
                label="charset"
                :extra="$t(`compilerOptions.charset`)"
            >
                <a-input
                    v-model="queryParams.compilerOptions.charset"
                    :placeholder="createPlaceholder('charset')"
                    allow-clear
                />
            </a-form-item>
        </a-col>

        <a-col :span="24">
            <a-form-item
                field="importsNotUsedAsValues"
                label="importsNotUsedAsValues"
                :extra="$t(`compilerOptions.importsNotUsedAsValues`)"
            >
                <a-select
                    v-model="queryParams.compilerOptions.lib"
                    allow-clear
                    :placeholder="createPlaceholder('importsNotUsedAsValues')"
                >
                    <a-option v-for="item in importsNotUsedAsValues" :key="useId" :value="item" :label="item"/>
                </a-select>
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
import {ImportsNotUsedAsValuesEnum} from "@/enum/ImportsNotUsedAsValuesEnum.ts";

defineOptions({
    name: 'BackwardsCompatibilityPlugin'
})

const fields = [

// charset?: string;
// importsNotUsedAsValues?: ImportsNotUsedAsValuesType;
    'keyofStringsOnly',
    'noImplicitUseStrict',
    'noStrictGenericChecks',
    'preserveValueImports',
    'suppressExcessPropertyErrors',
    'suppressImplicitAnyIndexErrors'
];

const {queryParams} = defineProps(['queryParams']);

const importsNotUsedAsValues = Object.values(ImportsNotUsedAsValuesEnum)
</script>

<style scoped>

</style>
