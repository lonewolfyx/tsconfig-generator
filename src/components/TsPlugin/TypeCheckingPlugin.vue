<template>
    <a-col :span="8">
        <ItemTitle title="Type Checking"/>

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

defineOptions({
    name: 'TypeCheckingPlugin'
})

const fields = [
    'exactOptionalPropertyTypes',
    'noFallthroughCasesInSwitch',
    'noImplicitOverride',
    'noImplicitReturns',
    'noUnusedLocals',
    'noUnusedParameters',
    'strict',
    'strictBindCallApply',
    'strictBuiltinIteratorReturn',
    'strictFunctionTypes',
    'strictNullChecks',
    'strictPropertyInitialization',
    'useUnknownInCatchVariables',
]

const {queryParams} = defineProps(['queryParams']);

</script>

<style scoped>

</style>
