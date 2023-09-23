import { IMark } from "./Mark";

export interface IModel {
  id: number;
  name: string;
  markId: number;
  mark: IMark;
}
