// 의도적으로 3가지 eslint 경고를 발생시키는 코드
// 1. 'props' is defined but never used
// 2. 'var' is used instead of 'let' or 'const'
// 3. 'unused' is assigned a value but never used

export function App(props) {
  var unused = "Unused variable";

  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}
