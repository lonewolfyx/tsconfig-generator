import type {TsConfigJson} from "type-fest";

// 官方 tsconfig.json
export const tsconfigVariable: TsConfigJson = {
    compilerOptions: {
        strict: true,
        noImplicitAny: true,
        strictNullChecks: true,
        strictFunctionTypes: true,
        strictPropertyInitialization: true,
        strictBindCallApply: true,
        noImplicitThis: true,
        noImplicitReturns: true,
        alwaysStrict: true,
        esModuleInterop: true,
        declaration: true,
        target: "ES2017",
        jsx: "react",
        module: "ESNext",
        moduleResolution: "node"
    }

}
