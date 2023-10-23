import getBlogSaga from './getBlog.saga';
import createBlogSaga from './createBlog.saga';
import editBlogSaga from './editBlog.saga';
import deleteBlogSaga from './deleteBlog.saga';

export default [
  getBlogSaga, createBlogSaga, editBlogSaga, deleteBlogSaga
]