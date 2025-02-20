<template>
    <div class="flex-1 p-4 h-full col-span-2 overflow-x-hidden">
        <a-form :model="queryParams" label-align="left" layout="vertical">
            <a-row :gutter="24">
                <TargetPlugin :queryParams="queryParams"/>
                <JsxPlugin :queryParams="queryParams"/>
                <ModulePlugin :queryParams="queryParams"/>

                <TypeCheckingPlugin :queryParams="queryParams"/>
                <ModulesPlugin :queryParams="queryParams"/>
                <EmitPlugin :queryParams="queryParams"/>
                <JavaScriptSupportPlugin :queryParams="queryParams"/>
                <EditorSupportPlugin :queryParams="queryParams"/>
                <InteropConstraintsPlugin :queryParams="queryParams"/>
                <BackwardsCompatibilityPlugin :queryParams="queryParams"/>

                <LanguageAndEnvironmentPlugin :queryParams="queryParams"/>

                <CompilerDiagnosticsPlugin :queryParams="queryParams"/>
                <ProjectsPlugin :queryParams="queryParams"/>
                <OutputFormattingPlugin :queryParams="queryParams"/>
                <CompletenessPlugin :queryParams="queryParams"/>
            </a-row>
        </a-form>
    </div>
</template>

<script setup lang="ts">
import TargetPlugin from "@/components/TsPlugin/TargetPlugin.vue";
import JsxPlugin from "@/components/TsPlugin/JsxPlugin.vue";
import ModulePlugin from "@/components/TsPlugin/ModulePlugin.vue";
import ProjectsPlugin from "@/components/TsPlugin/ProjectsPlugin.vue";
import TypeCheckingPlugin from "@/components/TsPlugin/TypeCheckingPlugin.vue";
import OutputFormattingPlugin from "@/components/TsPlugin/OutputFormattingPlugin.vue";
import ModulesPlugin from "@/components/TsPlugin/ModulesPlugin.vue";
import LanguageAndEnvironmentPlugin from "@/components/TsPlugin/LanguageAndEnvironmentPlugin.vue";
import JavaScriptSupportPlugin from "@/components/TsPlugin/JavaScriptSupportPlugin.vue";
import InteropConstraintsPlugin from "@/components/TsPlugin/InteropConstraintsPlugin.vue";
import EmitPlugin from "@/components/TsPlugin/EmitPlugin.vue";
import CompletenessPlugin from "@/components/TsPlugin/CompletenessPlugin.vue";
import CompilerDiagnosticsPlugin from "@/components/TsPlugin/CompilerDiagnosticsPlugin.vue";
import BackwardsCompatibilityPlugin from "@/components/TsPlugin/BackwardsCompatibilityPlugin.vue";
import EditorSupportPlugin from "@/components/TsPlugin/EditorSupportPlugin.vue";
import {useTsConfigStore} from "@/stores/tsconfig.ts";

defineOptions({
    name: 'TsConfiguration'
})

const tsConfigStore = useTsConfigStore()
const queryParams = tsConfigStore.queryParams;

// onMounted(() => {
//     setTimeout(() => {
//         queryParams.compilerOptions.module = 'None';
//     }, 2000)
// })
</script>
