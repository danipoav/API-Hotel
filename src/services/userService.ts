import { UserType, UserTypeID } from "../interfaces/UserType";
import { user } from "../data/user";
import { v4 as uuidv4 } from "uuid";

let users: UserTypeID[] = user;

export const fetchAllUsers = () => {
    return users;
}

export const fetchUserById = (id: string) => {
    return users.find((user) => user.id === id);
}

export const addUser = (newUser: UserType) => {
    const updatedUser = { ...newUser, id: uuidv4() };
    users.push(updatedUser);
    return users;
}

export const editUser = (id: string, updatedUser: UserTypeID) => {
    users = users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
    );
    return users;
}

export const removeUser = (id: string) => {
    users = users.filter((user) => user.id !== id);
    return users
}
