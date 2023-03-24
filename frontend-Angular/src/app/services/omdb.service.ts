import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseOmdb } from '../models/response-api';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {


  private apiUrl = 'http://127.0.0.1:8000/api/omdb';


  constructor(private httpClient: HttpClient, private authService: AuthService) { }


  searchMovieByTitle(title: string) {
    return this.httpClient.get<ResponseOmdb>(this.apiUrl + '/?title=' + title, { headers: this.getAuthHeader() });
  }


  searchMovieByImdbId(imdbId: string) {
    return this.httpClient.get<ResponseOmdb>(this.apiUrl + '/?imdbId=' + imdbId, { headers: this.getAuthHeader() });
  }


  getAuthHeader(): HttpHeaders {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.authService.getToken() });
    return headers;
  }

  
}
