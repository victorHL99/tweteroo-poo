class User {
  username;
  avatar;

  constructor(username, avatar) {
    this.username = username;
    this.avatar = avatar;
  }
}

export class UsersServices {
  createUser(username, avatar) {
    if (!username || !avatar) {
      return { status: 400, message: "Todos os campos são obrigatórios!" };
    }

    const user = new User(username, avatar);

    users.push(user);

    return { status: 200, message: "OK" };
  }
}

export const users = [];
