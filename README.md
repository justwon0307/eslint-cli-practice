# eslint-cli-practice
간단한 cli 프로그램 만들어보기

## 소개 (Introduction)

이 모노레포는 간단한 CLI 프로그램을 TypeScript로 만들어보는 연습을 위한 프로젝트입니다. 실제 운영 환경에서 사용하기 위한 목적보다는, 모노레포 환경 구성과 CLI 도구 개발 과정을 기록하고 학습하는 데 중점을 두고 있습니다. 따라서 이 패키지들은 외부 프로젝트에서 사용하기 위한 것이 아닙니다.

This monorepo is a practice project for creating a simple CLI program using TypeScript. Rather than being intended for production use, it focuses on recording and learning the process of setting up a monorepo environment and developing CLI tools. Therefore, these packages are not intended for use in external projects.

## 개발 일지 (Devlog)

이 프로젝트는 개발 과정에서 겪은 문제와 해결 방법을 기록하는 개발 일지 형식을 따릅니다.

This project follows the format of a devlog, recording issues encountered during development and their solutions.

## 패키지 목록 (Packages)

- **[@internal/eslint](./packages/eslint/README.md)**: 메인 ESLint 설정 및 CLI 도구. (Main ESLint configuration and CLI tool.)
- **[playground](./packages/playground/README.md)**: ESLint 설정을 테스트해볼 수 있는 놀이터. (Playground for testing ESLint configurations.)
- **[sample-json](./packages/sample-json/README.md)**: JSON 린팅 테스트를 위한 샘플 패키지. (Sample package for testing JSON linting.)
- **[sample-react](./packages/sample-react/README.md)**: React 린팅 테스트를 위한 샘플 패키지. (Sample package for testing React linting.)

## 오류 수정 일지 (Error Fix Log)

`sample-react` 패키지에서 `pnpm exec my-eslint-cli init --react`를 실행했을 때, 다음 오류가 발생했습니다.

When running `pnpm exec my-eslint-cli init --react` in the `sample-react` package, the following error occurred:

```
node:internal/modules/esm/resolve:275
    throw new ERR_MODULE_NOT_FOUND(
          ^

Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/vietman2/workspace/eslint-cli-practice/packages/eslint/dist/cli/actions' imported from /Users/vietman2/workspace/eslint-cli-practice/packages/eslint/dist/cli/index.js
    at finalizeResolution (node:internal/modules/esm/resolve:275:11)
    at moduleResolve (node:internal/modules/esm/resolve:860:10)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49) {
  code: 'ERR_MODULE_NOT_FOUND',
  url: 'file:///Users/vietman2/workspace/eslint-cli-practice/packages/eslint/dist/cli/actions'
}
```

**오류 발생 원인:** CLI 실행 시, Node.js 환경에서 ESM(ECMAScript Modules) 형식의 `import`를 제대로 해석하지 못하여 발생합니다.

**Cause:** The error occurs because the Node.js environment fails to correctly interpret ESM (ECMAScript Modules) style `import`s during CLI execution.

**해결 방법:** 빌드 시점에 `tsc-esm-fix`를 실행하여 이 문제를 자동으로 해결합니다.

**Solution:** This issue is automatically resolved by running `tsc-esm-fix` at build time.
