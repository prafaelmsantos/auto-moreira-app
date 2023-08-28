import { BASE_API_URL } from "../config/variables";
import { IUser, UserLogin } from "../models/identity/User";

class UserService {
  static async createUser(user: IUser): Promise<Response | undefined> {
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

  static async login(userLogin: UserLogin): Promise<Response | undefined> {
    const endpoint = `${BASE_API_URL}${"api/users/login"}`;
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(userLogin),
        headers: { "Content-Type": "application/json" },
      });

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  static setCurrentUser(user: IUser): void {
    localStorage.setItem("user", JSON.stringify(user));
  }
}

export default UserService;
