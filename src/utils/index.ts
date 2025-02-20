type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

interface JsonObject {
    [key: string]: JsonValue;
}

interface JsonArray extends Array<JsonValue> {
}

/**
 * 对象排序
 * @param obj
 */
export const sort = (obj: Record<string, any>): Record<string, any> => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(sort);
    }

    const sortedObj: Record<string, any> = {};
    const keys = Object.keys(obj).sort();

    for (const key of keys) {
        sortedObj[key] = sort(obj[key]);
    }

    return sortedObj;
};


/**
 * 移除空值
 * @param obj
 */
export const removeEmptyValues = (obj: object): JsonObject => {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    const cleanedObj: JsonObject = {};

    Object.entries(obj).forEach(([key, value]) => {
        // 判断空字符串、null、undefined、空数组或空对象
        if (
            value !== "" &&
            value !== null &&
            value !== undefined &&
            value !== false && // 移除值为 false 的键值对
            !(Array.isArray(value) && value.length === 0) && // 排除空数组
            !(typeof value === "object" && Object.keys(value).length === 0) // 排除空对象
        ) {
            // 如果值是对象，递归清理
            cleanedObj[key] =
                typeof value === "object" && !Array.isArray(value)
                    ? removeEmptyValues(value as JsonObject)
                    : value;
        }
    });

    return cleanedObj;
}

export const createPlaceholder = (params: string) => `please enter ${params} content`;