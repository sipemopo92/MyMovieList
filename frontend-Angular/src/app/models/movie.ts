import { Actor } from "./actor";

export interface Movie {
    id: number;
    title: string;
    year: string;
    released: string;
    runtime: string;
    genre: string;
    writer: string;
    country: string;
    imdb_id: string;
    actros: Actor[];
}

