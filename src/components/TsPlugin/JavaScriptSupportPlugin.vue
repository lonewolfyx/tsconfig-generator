<template>
    <a-col :span="8">
        <ItemTitle title="JavaScript Support"/>

        <a-col :span="24" v-for="item in fields" :key="useId()">
            <a-form-item :field="item" :extra="$t(`compilerOptions.${item}`)">
                <a-switch type="round" v-model="queryParams.compilerOptions[item]"/>
                <span class="pl-4 text-[var(--color-text-2)]">{{ item }}</span>
            </a-form-item>
        </a-col>

        <a-col :span="24">
            <a-form-item
                field="maxNodeModuleJsDepth"
                label="maxNodeModuleJsDepth"
                :extra="$t(`compilerOptions.maxNodeModuleJsDepth`)"
            >
                <a-input-number
                    :min="0"
                    v-model="queryParams.compilerOptions.maxNodeModuleJsDepth"
                    :placeholder="createPlaceholder('maxNodeModuleJsDepth')"
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
    name: 'JavaScriptSupportPlugin'
})

const fields = [
    'allowJs',
    'checkJs'
]

const {queryParams} = defineProps(['queryParams']);

</script>

<style scoped>

</style>
