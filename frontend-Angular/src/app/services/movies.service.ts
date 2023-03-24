import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OmdbMovie } from '../models/omdb-movie';
import { ResponseMovie, ResponseMovies } from '../models/response-api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {


  private apiUrl = 'http://127.0.0.1:8000/api/movies'


  constructor(private httpClient: HttpClient, private authService: AuthService) { }


  storeMovie(user_id: number, omdbMovie: OmdbMovie) {
    let body = {
      'title': omdbMovie.title,
      'year': omdbMovie.year,
      'released': omdbMovie.released,
      'runtime': omdbMovie.runtime,
      'writer': omdbMovie.writer,
      'country': omdbMovie.country,
      'imdb_id': omdbMovie.imdbID,
    };
    return this.httpClient.post<ResponseMovie>(this.apiUrl + '/' + user_id, body, { headers: this.getAuthHeader() });
  }


  getMovies(user_id: number) {
    return this.httpClient.get<ResponseMovies>(this.apiUrl + '/' + user_id, {headers: this.getAuthHeader()})
  }


  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authService.getToken() });
    return headers;
  }


}
