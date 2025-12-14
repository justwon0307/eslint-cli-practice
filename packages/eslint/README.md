# @internal/eslint

본 프로젝트의 가장 중요한 패키지로, ESLint 설정 모음과 `eslint.config.ts` 파일을 기본값으로 설정해주는 CLI 도구를 제공한다.

This is the most important package in this project, providing a collection of ESLint configurations and a CLI tool to set up the `eslint.config.ts` file with default values.

## 설치 (Installation)

이 패키지는 연습용 패키지로, 해당 모노레포 내부에서만 사용한다. 아래 명령어로 설치할 수 있다.

This package is for practice purposes and is intended for use only within this monorepo. You can install it using the command below:

```bash
pnpm add --workspace -D @internal/eslint
```

## CLI 사용법 (CLI Usage)

CLI 도구인 `my-eslint-cli`를 사용하여 `eslint.config.ts` 파일을 간단하게 초기화할 수 있다.

You can easily initialize your `eslint.config.ts` file using the `my-eslint-cli` tool.

```bash
pnpm my-eslint-cli init [options]
# or yarn my-eslint-cli init [options]
# or npm run my-eslint-cli init [options]
```

### 옵션 (Options)

*   `--react`: React 관련 설정을 포함. (Includes React-related configurations.)
*   `--all`: 사용 가능한 모든 설정(기본, React, JSON, Markdown)을 포함. 이 옵션은 `--react`보다 우선순위가 높다. (Includes all available configurations (Base, React, JSON, Markdown). This option takes precedence over `--react`.)
*   `-f, --force`: `eslint.config.ts` 파일이 이미 존재할 경우 덮어쓴다. (Overwrites `eslint.config.ts` if it already exists.)

### 예시 (Examples)

기본 설정으로 초기화:
Initialize with basic configuration:
```bash
my-eslint-cli init
```

React 설정으로 초기화:
Initialize with React configuration:
```bash
my-eslint-cli init --react
```

모든 설정으로 초기화:
Initialize with all available configurations:
```bash
my-eslint-cli init --all
```

기존 설정 파일 덮어쓰기:
Force overwrite an existing configuration file:
```bash
my-eslint-cli init --force
```

## 중요 참고 사항 (Important Notes)

*   이 CLI는 현재 작업 디렉토리에 `eslint.config.ts` 파일을 생성한다. 파일 이름은 `eslint.config.ts`로 고정되어 있다.
    *   This CLI creates an `eslint.config.ts` file in your current working directory. The filename is fixed as `eslint.config.ts`.
*   **TypeScript 설정 파일을 사용하려면 `jiti`가 필요하다.** ESLint가 TypeScript 설정 파일(`eslint.config.ts`)을 읽으려면, 프로젝트에 `jiti`를 개발 의존성으로 설치해야 한다.
    *   **TypeScript configuration files require `jiti`.** In order for ESLint to read TypeScript configuration files (`eslint.config.ts`), you need to install `jiti` as a development dependency in your project.
*   이 CLI는 피어 의존성(peer dependencies)을 *자동으로 설치하지 않는다*. `init` 명령어를 실행한 후, `@internal/eslint`의 피어 의존성인 필수 ESLint 플러그인과 파서를 수동으로 설치해야 한다. 필요한 패키지 목록은 `package.json`의 `peerDependencies` 섹션을 참조하거나 CLI 실행 후 출력되는 메시지를 확인.
    *   This CLI *does not automatically install* peer dependencies. After running the `init` command, you will need to manually install the required ESLint plugins and parsers that are peer dependencies of `@internal/eslint`. Refer to the `peerDependencies` section of `package.json` or check the message output after running the CLI for the list of necessary packages.

## 수동 설정 (Manual Setup)

`eslint.config.ts` 파일을 수동으로 생성하여 설정을 직접 구성할 수도 있다.

You can also manually create an `eslint.config.ts` file and configure it yourself.

### 모든 기능 포함 설정 (All-inclusive Configuration)

프로젝트 루트에 `eslint.config.ts` 파일을 생성하고 아래 내용을 추가하여 모든 설정을 포함할 수 있다.

Create an `eslint.config.ts` file in your project root and add the following content for an all-inclusive configuration:

```typescript
// eslint.config.ts
import { defineConfig } from "eslint/config";
import { allConfig } from "@internal/eslint";

export default defineConfig([
  ...allConfig,
  {
    // 여기에 사용자 정의 규칙을 추가하세요
    // Add your custom rules here
  },
]);
```

## 사용 가능한 설정 (Available Configurations)

`@internal/eslint` 패키지는 다양한 용도로 사용할 수 있는 여러 설정을 제공한다.

The `@internal/eslint` package provides several configurations for various uses.

*   `baseConfig`: JavaScript/TypeScript 프로젝트를 위한 기본 설정이다. (Base configuration for JavaScript/TypeScript projects.)
*   `reactConfig`: React 프로젝트를 위한 설정이다. (Configuration for React projects.)
*   `jsonConfig`: JSON 파일을 위한 설정이다. (Configuration for JSON files.)
*   `markdownConfig`: Markdown 파일을 위한 설정이다. (Configuration for Markdown files.)
*   `allConfig`: 위에서 언급된 모든 설정을 포함하는 종합 설정이다. (Comprehensive configuration including all the above.)

### 여러 설정 병합하기 (Merging Multiple Configurations)

`defineConfig` 함수를 사용하여 필요한 설정을 병합하고 사용자 정의 규칙을 추가할 수 있다. 예를 들어, `baseConfig`와 `reactConfig`를 병합하려면 다음과 같이 할 수 있다.

You can merge the necessary configurations and add custom rules using the `defineConfig` function. For example, to merge `baseConfig` and `reactConfig`, you can do the following:

```typescript
// eslint.config.ts
import { defineConfig } from "eslint/config";
import { baseConfig } from "@internal/eslint";
import { reactConfig } from "@internal/eslint/react"; // React 설정은 별도 경로에서 임포트

export default defineConfig([
  ...baseConfig,
  ...reactConfig, // reactConfig가 baseConfig를 덮어쓰도록 순서에 유의하세요.
  {
    // 여기에 사용자 정의 규칙을 추가하세요
    // Add your custom rules here
  },
]);
```

`jsonConfig`와 `markdownConfig`는 `files` 속성을 사용하여 특정 파일에만 적용되므로, `allConfig`에 포함되거나 개별적으로 추가될 때 다른 설정과 충돌하지 않는다.

`jsonConfig` and `markdownConfig` apply only to specific files using their `files` property, so they won't conflict with other configurations when included in `allConfig` or added individually.

