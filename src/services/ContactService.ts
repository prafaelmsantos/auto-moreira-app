import { BASE_API_URL } from "../config/variables";
import { IContact } from "../models/Contact";

class ContactService {
  static async createUser(user: IContact): Promise<Response | undefined> {
    const endpoint = `${BASE_API_URL}${"api/users/createUser"}`;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ContactService;
