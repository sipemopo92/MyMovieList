import { OmdbMovie } from "./omdb-movie";
import { User } from "./users";

export interface ResponseOmdb {
    success: boolean;
    message: string;
    data: OmdbMovie;
}

export interface ResponseUser {
    success: boolean;
    message: string;
    data: User;
}