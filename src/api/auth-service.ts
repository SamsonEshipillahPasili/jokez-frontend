import SignInData from "./models/SignInData";
import User from "./models/User";

const users: User[] = [];

export async function signUp(user: User): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            users.push(user);
        }, 3000);
    });
}

export async function signIn({username, password}: SignInData): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'sam@gmail.com' && password === 'password') {
                resolve('some token');
            } else {
                reject(new Error('Invalid credentials'));
            }
        }, 300);
    });
}
