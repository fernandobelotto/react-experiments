import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice";
import { todosSlice } from "../todos/slice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    todos: todosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
