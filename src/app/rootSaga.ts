import { all } from "redux-saga/effects"

function* helloSaga() {
  console.log("HELLO SAGA")
}

export default function* rootSaga() {
  console.log("ROOT SAGA")
  yield all([helloSaga()])
}
