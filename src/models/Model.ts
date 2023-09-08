import { IMark } from "./Mark";

export interface IModel {
  Id: number;
  name: string;
  markId: number;
  mark: IMark;
}
