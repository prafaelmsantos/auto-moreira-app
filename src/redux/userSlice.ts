import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/identity/User";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    removeUser: () => initialState,
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { removeUser, setUser } = userSlice.actions;
