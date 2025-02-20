export default {

    // Type Checking
    'compilerOptions.allowUnreachableCode': '禁用对不可达代码的错误报告',
    'compilerOptions.allowUnusedLabels': '禁用对未使用的标签的错误报告',
    'compilerOptions.alwaysStrict': '确保始终发出 `use strict`',
    'compilerOptions.exactOptionalPropertyTypes': '解释可选属性类型，而不是添加 `undefined`',
    'compilerOptions.noFallthroughCasesInSwitch': '启用对 switch 语句中未处理的默认情况的错误报告',
    'compilerOptions.noImplicitAny': '对隐含 `any` 类型的表达式和声明启用错误报告',
    'compilerOptions.noImplicitOverride': '确保派生类中的覆盖成员标记为 `override` 修饰符',
    'compilerOptions.noImplicitReturns': '检查函数没有隐式的返回值',
    'compilerOptions.noImplicitThis': '当 `this` 被赋予 `any` 类型时启用错误报告',
    'compilerOptions.noPropertyAccessFromIndexSignature': '对使用索引类型声明的键强制使用索引访问器',
    'compilerOptions.noUncheckedIndexedAccess': '使用索引访问时，将 `undefined` 添加到类型中',
    'compilerOptions.noUnusedLocals': '当本地变量未读取时启用错误报告',
    'compilerOptions.noUnusedParameters': '当函数参数未读取时引发错误',
    'compilerOptions.strict': '启用所有严格的类型检查选项',
    'compilerOptions.strictBindCallApply': '检查 `bind`、`call` 和 `apply` 方法的参数是否与原始函数匹配',
    'compilerOptions.strictBuiltinIteratorReturn': '内置迭代器实例化时使用 `TReturn` 类型为 `undefined` 而不是 `any`',
    'compilerOptions.strictFunctionTypes': '在分配函数时，检查参数和返回值是否是子类型兼容的',
    'compilerOptions.strictNullChecks': '在类型检查时考虑 `null` 和 `undefined`',
    'compilerOptions.strictPropertyInitialization': '检查在构造函数中未设置的类属性',
    'compilerOptions.useUnknownInCatchVariables': '默认将 catch 子句变量设置为 `unknown` 而不是 `any`',


    'compilerOptions.allowArbitraryExtensions': '启用导入任何扩展名的文件，前提是存在声明文件.',
    'compilerOptions.allowImportingTsExtensions': '允许导入带有 TypeScript 文件扩展名的文件。需要设置 `--moduleResolution bundler` 和 `--noEmit` 或 `--emitDeclarationOnly`',
    'compilerOptions.allowUmdGlobalAccess': '允许从模块访问 UMD 全局变量',
    'compilerOptions.baseUrl': '指定解析非相对模块名称的基本目录',
    'compilerOptions.module': '指定要使用模块化的规范',
    // moduleResolution':'指定 TypeScript 如何从给定的模块说明符查找文件',
    'compilerOptions.noResolve': '禁止 `import`、`require` 或 `<reference>` 从扩展 TypeScript 项目中应添加的文件数量.',
    'compilerOptions.noUncheckedSideEffectImports': '检查副作用导入',
    'compilerOptions.paths': '指定一组条目，这些条目将导入重新映射到其他查找位置',
    'compilerOptions.resolveJsonModule': '启用导入 .json 文件',
    'compilerOptions.resolvePackageJsonExports': '在解析包导入时使用 package.json 的 `exports` 字段',
    'compilerOptions.resolvePackageJsonImports': '在解析导入时使用 package.json 的 `imports` 字段',
    'compilerOptions.rewriteRelativeImportExtensions': '在输出文件中的相对导入路径中将 `.ts`、`.tsx`、`.mts` 和 `.cts` 文件扩展名重写为其 JavaScript 等效项',
    'compilerOptions.rootDir': '指定源文件内的根文件夹',
    'compilerOptions.rootDirs': '允许在解析模块时将多个文件夹视为一个',
    'compilerOptions.typeRoots': '指定多个文件夹，这些文件夹类似于 `./node_modules/@types``',
    'compilerOptions.types': '指定不引用源文件的类型包名称',

    // Emit
    'compilerOptions.declaration': '从 TypeScript 和 JavaScript 文件生成 .d.ts 文件',
    'compilerOptions.declarationDir': '指定生成的声明文件的输出目录',
    'compilerOptions.declarationMap': '为 d.ts 文件创建源映射',
    'compilerOptions.downlevelIteration': '发出更符合、但冗长且性能较差的 JavaScript 以进行迭代',
    'compilerOptions.emitBOM': '在输出文件的开始处发出 UTF-8 字节顺序标记 (BOM)',
    'compilerOptions.emitDeclarationOnly': '仅输出 .d.ts 文件，不输出 JavaScript 文件',
    'compilerOptions.importHelpers': '允许从 tslib 一次导入辅助函数，而不是在每个文件中包含它们',
    'compilerOptions.inlineSourceMap': '在发出的 JavaScript 中包含源映射文件',
    'compilerOptions.inlineSources': '在发出的源映射中包含源代码',
    'compilerOptions.mapRoot': '指定调试器应定位映射文件的位置，而不是生成的位置',
    'compilerOptions.newLine': '设置发出文件的换行符',
    'compilerOptions.noEmit': '是否不生成编译后文件',
    'compilerOptions.noEmitHelpers': '禁用在编译输出中生成自定义辅助函数，如 `__extends`',
    'compilerOptions.noEmitOnError': '当有错误时是否生成文件',
    'compilerOptions.outDir': '指定所有发出的文件的输出文件夹',
    'compilerOptions.outFile': '指定将所有输出打包成一个 JavaScript 文件的文件。如果 `declaration` 为 true，还指定一个打包所有 .d.ts 输出的文件',
    'compilerOptions.preserveConstEnums': '禁用删除 `const enum` 声明在生成的代码中',
    'compilerOptions.removeComments': '是否移除注释',
    'compilerOptions.sourceMap': '为发出的 JavaScript 文件创建源映射文件',
    'compilerOptions.sourceRoot': '指定调试器查找引用源代码的根路径',
    'compilerOptions.stripInternal': '禁用发出带有 `@internal` 的 JSDoc 注释的声明',

    // JavaScript Support
    'compilerOptions.allowJs': '允许 JavaScript 文件成为程序的一部分。使用 `checkJS` 选项从这些文件中获取错误',
    'compilerOptions.checkJs': '启用对类型检查的 JavaScript 文件的错误报告',
    'compilerOptions.maxNodeModuleJsDepth': '指定用于检查 `node_modules` 中 JavaScript 文件的最大文件夹深度。仅适用于 `allowJs`',

    // Editor Support
    'compilerOptions.disableSizeLimit': '取消对 TypeScript 语言服务器中 JavaScript 文件源代码总大小的 20MB 上限限制',

    // Interop Constraints
    'compilerOptions.allowSyntheticDefaultImports': '当模块没有默认导出时，允许 `import x from y`',
    'compilerOptions.esModuleInterop': '是否通过为所有导入模块创建命名空间对象，允许CommonJS和ES模块之间的互操作性，开启改选项时，也自动开启 `allowSyntheticDefaultImports` 选项',
    'compilerOptions.forceConsistentCasingInFileNames': '禁止对同一个文件的不一致的引用',
    'compilerOptions.isolatedDeclarations': '要求在导出时进行足够的注释，以便其他工具可以轻松生成声明文件',
    'compilerOptions.isolatedModules': '将每个文件作为单独的模块（与“ts.transpileModule”类似）',
    'compilerOptions.preserveSymlinks': '是否不解析符号链接的真实路径，这是为了在 Node.js 中反映相同的标志',
    'compilerOptions.verbatimModuleSyntax': '不转换或省略任何未标记为纯类型的导入或导出，确保它们根据模块设置以输出文件格式写入',

    // Backwards Compatibility
    'compilerOptions.charset': '输入文件的字符集',
    'compilerOptions.importsNotUsedAsValues': '此标志控制如何 import 工作方式',
    'compilerOptions.keyofStringsOnly': '当应用具有字符串索引签名的类型时，此标志将类型操作符的键值更改为返回 string 而不是string | number，已弃用',
    'compilerOptions.noImplicitUseStrict': '是否禁止无隐式严格模式',
    'compilerOptions.noStrictGenericChecks': '是否禁用严格的泛型检查',
    'compilerOptions.preserveValueImports': '在JavaScript输出中保留未使用的导入值，否则将被删除',
    'compilerOptions.suppressExcessPropertyErrors': '是否禁用报告过多的属性错误',
    'compilerOptions.suppressImplicitAnyIndexErrors': '是否抑制隐式any索引的错误',

    // Language and Environment
    'compilerOptions.emitDecoratorMetadata': '在源文件中为装饰声明的声明发出设计类型元数据',
    'compilerOptions.experimentalDecorators': '启用对遗留实验性装饰器的实验性支持',
    'compilerOptions.jsxFactory': '指定在针对 React JSX 发射时使用的 JSX 工厂函数，例如 `React.createElement` 或 `h`',
    'compilerOptions.jsxFragmentFactory': '指定在针对 React JSX 发射时用于片段的 JSX 片段引用，例如 `React.Fragment` 或 `Fragment`',
    'compilerOptions.jsxImportSource': '指定在 `jsx: react-jsx*` 时用于导入 JSX 工厂函数的模块说明符',
    'compilerOptions.lib': '指定一组捆绑的库声明文件，描述目标运行时环境。运行在浏览器中不用设置，运行在node或其他中才需要设置',
    'compilerOptions.moduleDetection': '控制用于检测模块格式 JS 文件的方法',
    'compilerOptions.noLib': '禁用包含任何库文件，包括默认的 lib.d.ts',
    'compilerOptions.reactNamespace': '指定在针对 `react` JSX 发射时调用的 `createElement` 对象',
    'compilerOptions.useDefineForClassFields': '发出符合 ECMAScript 标准的类字段',
    'compilerOptions.target': '设置生成的 JavaScript 的语言版本，并包含兼容的库声明',
    'compilerOptions.jsx': '指定生成的 JSX 代码',

    // Compiler Diagnostics
    'compilerOptions.diagnostics': '输出用于调试的诊断信息',
    'compilerOptions.extendedDiagnostics': '是否查看 TS 在编译时花费的时间',
    'compilerOptions.generateCpuProfile': '在编译阶段让 TS 发出 CPU 配置文件，只能通过终端或 CLI 调用 --generateCpuProfile tsc-output.cpuprofile',
    'compilerOptions.listEmittedFiles': '打印出编译后生成文件的名字',
    'compilerOptions.listFiles': '打印编译的文件(包括引用的声明文件)',
    'compilerOptions.noCheck': '禁用全面类型检查（只报告关键的解析和发射错误）',
    'compilerOptions.traceResolution': '当尝试调试未包含模块的原因时。启用该选项让 TypeScript 打印有关每个处理文件的解析过程的信息',

    // Projects
    'compilerOptions.composite': '启用允许将类型脚脚本项目与项目引用一起使用的约束',
    'compilerOptions.disableReferencedProjectLoad': '减少 TypeScript 自动加载的项目数量',
    'compilerOptions.disableSolutionSearching': '在编辑器中搜索查找所有引用或跳转到定义等功能时，禁止包含复合项目',
    'compilerOptions.disableSourceOfProjectReferenceRedirect': '禁止在引用复合项目时优先使用源文件而不是声明文件',
    'compilerOptions.incremental': '保存 .tsbuildinfo 文件以允许对项目进行增量编译',
    'compilerOptions.tsBuildInfoFile': '指定 .tsbuildinfo 增量编译文件的路径',

    // Output Formatting
    'compilerOptions.noErrorTruncation': '是否禁止截断错误消息',
    'compilerOptions.preserveWatchOutput': '是否在监视模式下保留过时的控制台输出，而不是每次发生更改时都清除屏幕',
    'compilerOptions.pretty': '是否使用颜色对上下文错误和消息进行样式化',

    // Completeness
    'compilerOptions.skipDefaultLibCheck': '跳过包含 TypeScript 的 .d.ts 文件类型检查',
    'compilerOptions.skipLibCheck': '跳过所有 .d.ts 文件类型检查'
}