import { ROLE } from "../enums/Role";

export interface IUser {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface UserLogin {
  userName: string;
  password: string;
}

export interface UserUpdate {
  id?: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: ROLE;
  description: string;
  imageUrl: string;
  password: string;
  token: string;
}
