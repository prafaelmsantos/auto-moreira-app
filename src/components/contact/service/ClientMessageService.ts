import { BASE_API_URL } from "../../../config/variables";
import { IClientMessage } from "../../../models/ClientMessage";
import { postData } from "../../../services/AutoMoreiraService";

const createClientMessage = async (clientMessage: IClientMessage): Promise<IClientMessage> =>
  await postData<IClientMessage>(`${BASE_API_URL}api/ClientMessages`, clientMessage);
  
export { createClientMessage };
