# 테스트 패키지: React

본 프로젝트의 `eslint` 패키지를 제대로 구성했는지 테스트하기 위한 첫 번째 패키지.
`eslint` 패키지를 설치하고, CLI를 이용해 React용 config를 구성한 뒤, 제대로 동작하는지 테스트한다.

## Setup

1. **프로젝트 준비 및 의도적인 오류 코드 작성**
   - React 및 타입 정의 설치:
     ```bash
     pnpm add react react-dom
     pnpm add -D @types/react
     ```
   - 간단한 React 코드 작성 (`src/App.tsx`)

2. **Lint 패키지 설치**
   - `@internal/eslint`와 추가 패키지 설치:
     ```bash
     pnpm add --workspace -D @internal/eslint
     pnpm add -D eslint eslint-plugin-react @eslint/css
     ```

3. **CLI를 통한 구성 작성**
   - 내가 만들어둔 간단한 CLI 프로그램을 동작시켜 React 구성을 작성한다.
     ```bash
     pnpm exec my-eslint-cli init --react
     ```

4. **테스트 실행**
   - 미리 작성해둔 script(`pnpm lint`)를 실행하여 기대했던 오류가 발생하는지 확인.
   - 콘솔에서 아래와 같은 오류 메시지가 발생해야 한다.

     ```
     /{...}/packages/sample-react/src/App.tsx
       5:21  error  'props' is defined but never used            @typescript-eslint/no-unused-vars
       6:3   error  Unexpected var, use let or const instead     no-var
       6:7   error  'unused' is assigned a value but never used  @typescript-eslint/no-unused-vars
     ```