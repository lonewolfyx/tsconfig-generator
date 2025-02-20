<template>
    <a-col :span='24'>
        <a-form-item label="Target" :extra="$t('compilerOptions.target')">
            <a-radio-group type='button' v-model='queryParams.compilerOptions.target'>
                <a-radio
                    v-for="item in target"
                    :key="useId()"
                    :value='item'
                >
                    {{ item }}
                </a-radio>
            </a-radio-group>

        </a-form-item>
    </a-col>
</template>

<script setup lang='ts'>
import {useId} from "vue";
import {TargetEnum} from "@/enum/targetEnum.ts";

defineOptions({
    name: 'TargetPlugin'
})

const {queryParams} = defineProps(['queryParams']);

const target = Object.values(TargetEnum);

</script>