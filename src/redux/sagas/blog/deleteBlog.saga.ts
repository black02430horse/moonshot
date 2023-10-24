import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "../../../utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppActionTypes, AppActions } from "../../store";
import { IAction } from "../../types/action";
import { BlogModel, TipButtonModel } from "../../../models";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* deleteBlogRequestSaga( action: PayloadAction<AppActionTypes.Blog.DeleteBlogsRequest> ) {
  console.log("hey");
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst(`blog/${action.payload.id}`, "DELETE", {}, true);
    });
    
    yield put(AppActions.loading.finishLoading());

    const id = result.data.id;
    yield put(AppActions.blog.deleteBlogRequestSuccess({id}));
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
  yield takeLatest("blog/deleteBlogRequest", deleteBlogRequestSaga);
})();
