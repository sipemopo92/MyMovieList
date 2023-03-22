import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseUser } from '../models/response-api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private authUrl = 'http://127.0.0.1:8000/api/users'
  private isUserLogged = true;
  
  constructor(private httpclient: HttpClient) { }


  isUserLoggedIn() {
    return this.isUserLogged;
  }


  login(email: string, password: string) {

  }

  
  register(name: string, email: string, password: string) {

  }


  logout() {
    this.isUserLogged = false;
  }


}
