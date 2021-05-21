import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// redux-chunk
// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

// // 1초 뒤에 increase 혹은 decrease 함수르 디스패치
// export const increaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => dispatch => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

// const initialState = 0;

// const counter = handleActions(
//   {
//     [INCREASE]: state => state + 1,
//     [DECREASE]: state => state - 1
//   },
//   initialState
// );

// export default counter;

const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록 () => undefined를 두 번째 파라미터로 넣어 준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // 특정 액션 디스패치
  const number = yield select(state => state.counter);
  console.log(`현재 값은 ${number}입니다`);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리
  yield throttle(3000, INCREASE_ASYNC, increaseSaga);

  // takeLastest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}
const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: state => state + 1,
    [DECREASE]: state => state - 1
  },
  initialState
);

export default counter;
