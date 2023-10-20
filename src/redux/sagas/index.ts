import { all } from 'redux-saga/effects';

import authSaga from './auth';
import blogSaga from './blog.saga';

function* rootSaga() {
  yield all([
    ...authSaga,
    blogSaga
  ])
}

export default rootSaga;