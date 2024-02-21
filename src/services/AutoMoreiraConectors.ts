/** @format */

import {BASE_API_URL} from "../config/variables";
import {IVisitor} from "../models/Visitor";
import {postData} from "./AutoMoreiraService";

const createVisitor = async (): Promise<IVisitor> =>
  await postData(`${BASE_API_URL}api/visitors`, {
    year: 0,
    Month: 0,
    Value: 0,
  });

export {createVisitor};
