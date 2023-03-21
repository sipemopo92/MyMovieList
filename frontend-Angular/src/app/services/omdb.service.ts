import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseOmdb } from '../models/response-api';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  private apiUrl = 'http://127.0.0.1:8000/api/omdb'

  constructor(private httpClient: HttpClient) {}

  searchMovieByTitle(title: string) {
    return this.httpClient.get<ResponseOmdb>(this.apiUrl + '/?title=' + title);
  }

  searchMovieByImdbId(imdbId: string) {
    return this.httpClient.get<ResponseOmdb>(this.apiUrl + '/?imdbId=' + imdbId);
  }


}
