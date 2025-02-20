import type {TargetEnum} from "@/enum/targetEnum.ts";
import type {JsxEnum} from "@/enum/jsxEnum.ts";
import type {ModuleEnum} from "@/enum/moduleEnum.ts";
import type {ImportsNotUsedAsValuesEnum} from "@/enum/ImportsNotUsedAsValuesEnum.ts";
import type {LanguageEnvironmentEnum} from "@/enum/LanguageEnvironmentEnum.ts";
import type {ModuleDetectionEnum} from "@/enum/moduleDetectionEnum.ts";

export type TargetType = keyof typeof TargetEnum;

export type JsxType = keyof typeof JsxEnum;

export type ModuleType = keyof typeof ModuleEnum;

export type ImportsNotUsedAsValuesType = keyof typeof ImportsNotUsedAsValuesEnum;

export type LanguageEnvironmentType = keyof typeof LanguageEnvironmentEnum;

export type moduleDetectionType = keyof typeof ModuleDetectionEnum;

export interface TypeScriptConfigInters {
    compilerOptions: {

        // Type Checking
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        exactOptionalPropertyTypes?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean
        noImplicitOverride?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        noPropertyAccessFromIndexSignature?: boolean;
        noUncheckedIndexedAccess?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        strict?: boolean;
        strictBindCallApply?: boolean;
        strictBuiltinIteratorReturn?: boolean;
        strictFunctionTypes?: boolean;
        strictNullChecks: boolean;
        strictPropertyInitialization: boolean;
        useUnknownInCatchVariables: boolean;

        // Modules
        allowArbitraryExtensions?: boolean;
        allowImportingTsExtensions?: boolean;
        allowUmdGlobalAccess: boolean;
        baseUrl?: string;
        module: ModuleType;
        noResolve: boolean;
        noUncheckedSideEffectImports: boolean;
        paths?: string[];
        resolveJsonModule: boolean;
        resolvePackageJsonExports: boolean;
        resolvePackageJsonImports: boolean;
        rootDir?: string;
        rootDirs?: string[];
        typeRoots?: string[]
        types?: string[];

        // Emit
        declaration: boolean;
        declarationDir?: string;
        declarationMap: boolean;
        downlevelIteration: boolean;
        emitBOM: boolean;
        emitDeclarationOnly: boolean;
        importHelpers: boolean;
        inlineSourceMap: boolean;
        inlineSources: boolean;
        mapRoot?: string;
        // newLine;
        noEmit: boolean;
        noEmitHelpers: boolean;
        noEmitOnError: boolean;
        outDir?: string;
        outFile?: string;
        preserveConstEnums: boolean;
        removeComments: boolean;
        sourceMap: boolean;
        sourceRoot?: string;
        stripInternal?: boolean;

        // JavaScript Support
        allowJs: boolean;
        checkJs: boolean;
        maxNodeModuleJsDepth: number;

        // Editor Support
        disableSizeLimit: boolean;

        // Interop Constraints
        allowSyntheticDefaultImports?: boolean;
        esModuleInterop: boolean;
        forceConsistentCasingInFileNames: boolean;// true
        isolatedDeclarations: boolean;
        isolatedModules: boolean;
        preserveSymlinks: boolean;
        verbatimModuleSyntax?: boolean;

        // Backwards Compatibility
        charset?: string;
        importsNotUsedAsValues?: ImportsNotUsedAsValuesType;
        keyofStringsOnly: boolean;
        noImplicitUseStrict: boolean;
        noStrictGenericChecks: boolean;
        preserveValueImports: boolean;
        suppressExcessPropertyErrors: boolean;
        suppressImplicitAnyIndexErrors: boolean;

        // Language and Environment
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        jsxFactory?: string; // React.createElement
        jsxFragmentFactory?: string;
        jsxImportSource?: string;
        lib?: LanguageEnvironmentType[];
        moduleDetection?: moduleDetectionType;
        noLib: boolean;
        reactNamespace?: string;// React
        useDefineForClassFields: boolean;
        target?: TargetType;
        jsx?: JsxType;

        // Compiler Diagnostics
        diagnostics?: boolean;
        // explainFiles; 无
        extendedDiagnostics: boolean;
        generateCpuProfile?: string;
        // generateTrace; 无
        listEmittedFiles: boolean;
        listFiles: boolean;
        noCheck: boolean;
        traceResolution: boolean;

        // Projects
        composite: boolean;
        disableReferencedProjectLoad?: boolean;
        disableSolutionSearching?: boolean;
        disableSourceOfProjectReferenceRedirect?: boolean;
        incremental?: boolean;
        tsBuildInfoFile?: string;

        // Output Formatting
        noErrorTruncation: boolean;
        preserveWatchOutput?: boolean;
        pretty: boolean;

        // Completeness
        skipDefaultLibCheck: boolean;
        skipLibCheck: boolean
    }
}