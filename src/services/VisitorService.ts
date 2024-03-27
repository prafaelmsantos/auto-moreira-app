/** @format */

import {BASE_API_URL} from "../config/variables";
import {IVisitor} from "../models/Visitor";
import { postWithoutData} from "./AutoMoreiraService";

const createVisitor = async (): Promise<IVisitor> =>
  await postWithoutData(`${BASE_API_URL}api/visitors`);

export {createVisitor};
