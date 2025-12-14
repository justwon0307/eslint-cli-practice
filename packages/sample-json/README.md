# 테스트 패키지: JSON

본 프로젝트의 `eslint` 패키지를 제대로 구성했는지 테스트하기 위한 두 번째 패키지.
`eslint` 패키지를 설치하고, JSON용 config를 구성한 뒤, 제대로 동작하는지 테스트한다.
본 패키지에서는, cli를 사용하지 않고, 직접 eslint.config.ts를 구성해본다.

## Setup

1. **프로젝트 준비 및 의도적인 오류 코드 작성**
   - `src/data.json` (Standard JSON): Duplicate key 및 Empty key 오류 포함.
   - `src/data.jsonc` (JSON with Comments): Comments, Duplicate key 및 Empty key 오류 포함.
   - `src/data.json5` (JSON5): Unquoted keys, Comments, Duplicate key 및 Empty key 오류 포함.

2. **Lint 패키지 설치**
   - `@internal/eslint`와 추가 패키지 설치:
     ```bash
     pnpm add --workspace -D @internal/eslint
     pnpm add -D eslint @eslint/json
     ```

3. **수동으로 구성 작성**
   - `eslint.config.ts` 파일을 생성하고 아래 내용을 추가한다.
     ```typescript
     import { defineConfig } from "eslint/config";
     import { baseConfig } from "@internal/eslint";
     import { jsonConfig } from "@internal/eslint/json";

     export default defineConfig([
       ...baseConfig,
       ...jsonConfig,
     ]);
     ```

4. **테스트 실행**
   - 미리 작성해둔 script(`pnpm lint`)를 실행하여 기대했던 오류가 발생하는지 확인.
   - 콘솔에서 아래와 같은 오류 메시지가 발생해야 한다.

     ```
     /{...}/packages/sample-json/src/data.json
       4:3  error  Duplicate key "isValid" found  json/no-duplicate-keys
       5:3  error  Empty key found                json/no-empty-keys

     /{...}/packages/sample-json/src/data.json5
       4:3  error  Duplicate key "isValid" found  json/no-duplicate-keys
       5:3  error  Empty key found                json/no-empty-keys

     /{...}/packages/sample-json/src/data.jsonc
       5:3  error  Duplicate key "isValid" found  json/no-duplicate-keys
       6:3  error  Empty key found                json/no-empty-keys
     ```