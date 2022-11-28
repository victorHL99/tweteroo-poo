import { UsersServices } from "../services/usersServices.js";

export class UsersController {
  createUser(username, avatar) {
    return new UsersServices().createUser(username, avatar);
  }
}
