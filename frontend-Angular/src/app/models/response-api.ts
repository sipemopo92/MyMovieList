import { Movie } from "./movie";
import { OmdbMovie } from "./omdb-movie";
import { User } from "./users";


export interface ResponseOmdb {
    success: boolean;
    message: string;
    data: OmdbMovie;
}


export interface ResponseOmdbSearch {
    success: boolean;
    message: string;
    data: OmdbMovie[];
}


export interface ResponseUser {
    success: boolean;
    message: string;
    data: User;
}


export interface ResponseMovie {
    success: boolean;
    message: string;
    data: Movie;
}


export interface ResponseMovies{
    success: boolean;
    message: string;
    data: Movie[];
}