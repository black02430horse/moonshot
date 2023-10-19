import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "../../../utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppActionTypes, AppActions } from "../../store";
import { IAction } from "../../types/action";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* signUpRequestSaga(
  action: PayloadAction<AppActionTypes.Auth.GetSignUpRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      console.log(action.payload.userInfo);
      return await makeAPIRequst(`auth/signup`, "POST", action.payload.userInfo, false);
    });
    
    yield put(AppActions.loading.finishLoading());
    // yield put(AppActions.auth.getMeRequestSuccess(result.data));
    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (action.payload.errorAction) {
        action.payload.errorAction(error.response?.data.message);
      }
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest("auth/signUpRequest", signUpRequestSaga);
})();
