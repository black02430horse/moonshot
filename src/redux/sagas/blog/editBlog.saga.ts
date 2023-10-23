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

function* editBlogRequestSaga( action: PayloadAction<AppActionTypes.Blog.EditBlogsRequest> ) {
  // console.log("hey");
  try {
    yield put(AppActions.loading.setLoading());

    

    const result: ResponseGenerator = yield call(async () => {
      const formData = new FormData();
      if(action.payload.file)formData.append("file", action.payload.file);
      const {creator, title, content, buttons, id} = action.payload.blog;
      formData.append("creator", creator);
      formData.append("title", title);
      formData.append("content", content);
      formData.append("buttons", buttons);
      return await makeAPIRequst(`blog/edit-blog/${action.payload.id}`, "POST", formData, true);
    });
    
    yield put(AppActions.loading.finishLoading());

    const blog = result.data.blog;
    // console.log("newBlog", blog);

    yield put(AppActions.blog.editBlogRequestSuccess({blog}));
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
  yield takeLatest("blog/editBlogRequest", editBlogRequestSaga);
})();
