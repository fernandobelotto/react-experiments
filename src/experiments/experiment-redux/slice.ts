import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
interface UserState {
  name: string;
  age: number;
}

// Define the initial state using that type
const initialState: UserState = {
  name: "John",
  age: 20,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
  },
});

export const { increment } = userSlice.actions;

export const selectCount = (state: RootState) => state.user.age;

export default userSlice.reducer;
