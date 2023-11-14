import { UserInterface } from "./user.interface";

export interface PostInterface {
    id?: number;
    title: string;
    body: string;
    user: UserInterface;
}

export interface CreatingPostInterface {
    title: string;
    body: string;
}