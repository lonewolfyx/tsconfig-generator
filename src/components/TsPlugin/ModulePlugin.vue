<template>
    <a-col :span='24'>
        <a-form-item label="Module" :extra="$t('compilerOptions.module')">
            <a-radio-group type='button' v-model='queryParams.compilerOptions.module'>
                <a-radio
                    v-for="item in module"
                    :key="useId()"
                    :value='item'
                >
                    {{ item }}
                </a-radio>
            </a-radio-group>

        </a-form-item>
    </a-col>
</template>

<script setup lang="ts">
import {useId} from "vue";
import {ModuleEnum} from "@/enum/moduleEnum.ts";

defineOptions({
    name: 'ModulePlugin'
})

const {queryParams} = defineProps(['queryParams']);

const module = Object.values(ModuleEnum)
</script>

<style scoped>

</style>