import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FilmListComponent } from './components/main/film-list/film-list.component';
import { GetFilmOmdbComponent } from './components/main/get-film-omdb/get-film-omdb.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'getfilm',
        pathMatch: 'full'
      },
      {
        path: 'getfilm',
        component: GetFilmOmdbComponent
      },
      {
        path: 'filmlist',
        component: FilmListComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
