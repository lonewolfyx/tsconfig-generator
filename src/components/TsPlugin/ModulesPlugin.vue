<template>
    <a-col :span="8">
        <ItemTitle title="Modules"/>

        <a-col :span="24">
            <a-form-item field="baseUrl" label="baseUrl" :extra="$t(`compilerOptions.baseUrl`)">
                <a-input
                    v-model="queryParams.compilerOptions.baseUrl"
                    allow-clear
                    :placeholder="createPlaceholder('baseUrl')"
                />

            </a-form-item>
        </a-col>

        <a-col :span="24" v-for="item in fields" :key="useId()">
            <a-form-item :field="item" :extra="$t(`compilerOptions.${item}`)">
                <a-switch type="round" v-model="queryParams.compilerOptions[item]"/>
                <span class="pl-4 text-[var(--color-text-2)]">{{ item }}</span>
            </a-form-item>
        </a-col>

        <a-col :span="24">
            <a-form-item field="rootDir" label="rootDir" :extra="$t(`compilerOptions.rootDir`)">
                <a-input
                    v-model="queryParams.compilerOptions.rootDir"
                    allow-clear
                    :placeholder="createPlaceholder('rootDir')"
                />

            </a-form-item>
        </a-col>
    </a-col>
</template>

<script setup lang="ts">
import {useId} from "vue";
import ItemTitle from "@/components/ItemTitle/ItemTitle.vue";
import {createPlaceholder} from "@/utils";

defineOptions({
    name: 'ModulesPlugin'
})

// paths?: string[],
// rootDir?: string,
// rootDirs?: string[],
// typeRoots?: string[]
// types?: string[]

const fields = [
    'allowArbitraryExtensions',
    'allowImportingTsExtensions',
    'allowUmdGlobalAccess',
    'noResolve',
    'noUncheckedSideEffectImports',
    'resolveJsonModule',
    'resolvePackageJsonExports',
    'resolvePackageJsonImports'
];


const {queryParams} = defineProps(['queryParams']);

</script>

<style scoped>

</style>
