import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import modalSlice from "./modalSlice";
import snackBarSlice from "./snackBarSlice";

export const store = configureStore({
  reducer: {
    loaderSlice,
    modalSlice,
    snackBarSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
