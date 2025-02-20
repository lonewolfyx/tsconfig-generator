import {defineStore} from "pinia";
import {ref} from "vue";
import {tsconfigVariable} from "@/tsconfig/tsconfig.variable.ts";

// export const useTsConfigStore = defineStore('tsconfig', () => {
//     const data = {} as any;
//
//
//     const formatProperties = (data: any) => {
//         const result = {} as any;
//
//         Object.keys(data).forEach(v => {
//             const value = data[v];
//
//             result[v] = {
//                 description: value?.description || ''
//             }
//
//             if (value?.default || value?.default === false) {
//                 result[v].default = value.default;
//             }
//
//             if (value?.type) {
//                 result[v].type = value.type[0];
//             }
//
//         })
//
//         return result;
//     }
//
//     const buildBaseConfig = async () => {
//         const result = await axios.get('https://json.schemastore.org/tsconfig');
//         const res = result.data;
//         const definitions = res?.definitions || {};
//         if (definitions) {
//             for (const key in definitions) {
//                 const _loc1_definition = definitions[key];
//                 if (_loc1_definition.hasOwnProperty('properties')) {
//                     const _loc2_properties = _loc1_definition.properties;
//                     for (const field in _loc2_properties) {
//                         const value = _loc2_properties[field];
//
//                         // 获取其描述内容
//                         // console.log(field, value?.description || '');
//                         // 获取其默认类型
//                         // console.log(field, value, value?.type?.[0] || false)
//                         console.log(field, value.hasOwnProperty('properties') ? formatProperties(value.properties) : false)
//
//                         data[field] = {
//                             description: value?.description || '',
//                         }
//
//                         if (value?.type) {
//                             data[field]['type'] = value.type[0]
//                         }
//
//                         if (value.hasOwnProperty('properties')) {
//                             data[field]['properties'] = formatProperties(value.properties)
//                         }
//                     }
//                 }
//             }
//         }
//
//         console.log(JSON.stringify(data))
//     }
//
//     return {
//         data,
//         buildBaseConfig
//     }
// }, {
//     persist: true
// })


export const useTsConfigStore = defineStore('tsconfig', () => {
    const queryParams = ref({...tsconfigVariable})

    return {queryParams}
})