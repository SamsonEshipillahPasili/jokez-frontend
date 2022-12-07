import User from "./models/User";

const users: User[] = [];

export async function signUp(user: User): Promise<void> {
    users.push(user);
}

export async function signIn(user: User): Promise<string> {
    return "Some token";
}
