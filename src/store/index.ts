import { configureStore } from '@reduxjs/toolkit';
import currentPostReducer from './post/currentPost';
import postDataSliceReducer from './post/postData';
import modifiedDataReducer from './data/modifiedData';
import profileDataReducer from './user/profileData';
import currentCommentReducer from './comment/currentComment';
import scrollDiscussionReducer from './scrollDiscussion';

const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    modifiedData: modifiedDataReducer, // hold all post data on globalStore
    postData: postDataSliceReducer, // data before publish
    currentPost: currentPostReducer, //data to edit || delete
    profileData: profileDataReducer,
    currentComments: currentCommentReducer, // helper comment state, otherwise commentArray form server take a while to response , it cause a bug when click to like button quickly.
    scrollDiscussion: scrollDiscussionReducer,
  },
});

export default store;