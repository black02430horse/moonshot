import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "../../utils";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AppActionTypes, AppActions } from "../store";
import { IAction } from "../types/action";
import { BlogModel, TipButtonModel } from "../../models";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* blogRequestSaga( action: PayloadAction<AppActionTypes.Blog.GetBlogsRequest> ) {
  // console.log("hey");
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst(`blog`, "GET", '', true);
    });
    
    yield put(AppActions.loading.finishLoading());
    const blogs: BlogModel[] = result.data.blogs.map((item: any) => {
      return {...item, buttons: JSON.parse(item.buttons)}
    });


    yield put(AppActions.blog.getBlogRequestSuccess({blogs}));
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
  yield takeLatest("blog/getBlogRequest", blogRequestSaga);
})();
