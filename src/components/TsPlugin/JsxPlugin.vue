<template>
    <a-col :span='24'>
        <a-form-item label="Jsx" :extra="$t('compilerOptions.jsx')">
            <a-radio-group type='button' v-model='queryParams.compilerOptions.jsx'>
                <a-radio
                    v-for="item in jsx"
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
import {JsxEnum} from "@/enum/jsxEnum.ts";

defineOptions({
    name: 'JsxPlugin'
})

const {queryParams} = defineProps(['queryParams']);

const jsx = Object.values(JsxEnum)
</script>

<style scoped>

</style>