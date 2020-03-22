import { takeEvery, all } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionTypes'

import {
  serverLogin
} from './saga'

export function * watchAuth () {
  yield takeEvery(actionTypes.DEMO_ACTION_TYPE, serverLogin)
}

export function * rootSaga () {
  yield all([
    watchAuth()
  ])
}
