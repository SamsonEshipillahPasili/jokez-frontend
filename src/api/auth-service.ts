import Joke from "./models/Joke";
import SignInData from "./models/SignInData";
import User from "./models/User";
import { faker } from '@faker-js/faker';

const users: User[] = [];

export async function signUp(user: User): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(() => {
            users.push(user);
            resolve();
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

export async function getMyJokes(): Promise<Joke[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const myJokes: Joke[] = [];
            for(let i = 0; i < 5; i++) {
                myJokes.push({
                    id: faker.datatype.number(),
                    content: faker.random.words() ,
                    createdBy: faker.name.fullName(),
                    createdDate: faker.date.recent().toUTCString()
                });
            }
            resolve(myJokes);
        }, 300);
    });
}

export async function getAllJokes() {
    return getMyJokes();
}