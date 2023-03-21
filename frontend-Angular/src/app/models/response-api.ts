import { OmdbMovie } from "./omdb-movie";

export interface ResponseOmdb {
    success: boolean;
    message: string;
    data: OmdbMovie;
}