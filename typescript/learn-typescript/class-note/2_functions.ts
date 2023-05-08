// TS 함수. parameter, return 타입 지정
function sum(a: number, b: number): number {
  return a + b;
}

// 선언한 인자보다 더 많이 인자를 넣으면 JS에서는 오류가 안나는데 TS는 오류를 도출함
// sum(10, 20, 30, 50);

// optional parameter: ?를 사용한다
function log(time: string, result?: string, option?: string) {
  console.log(time, result, option);
}
log("2020-01-01", "success");
