import { UserType, UserTypeID } from "../interfaces/UserType";
import User from "../models/userModel";
import { v4 as uuidv4 } from "uuid";


export const fetchAllUsers = async () => {
    return await User.find();
}

export const fetchUserById = async (id: string) => {
    return await User.findOne({id});
}

export const addUser = async (data: UserType) => {
    const user = { ...data, id: uuidv4() };
    const newUser = new User(user);
    return await newUser.save();
}

export const editUser = async (id: string, data: UserTypeID) => {
    return await User.findOneAndUpdate({id}, data, { new: true });
}

export const removeUser = async (id: string) => {
    return await User.findOneAndDelete({id});
}
