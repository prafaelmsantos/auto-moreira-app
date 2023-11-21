import { IUser } from "../models/identity/User";

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as IUser) : null;
};
