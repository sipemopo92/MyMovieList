import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FilmListComponent } from './components/main/film-list/film-list.component';
import { GetFilmOmdbComponent } from './components/main/get-film-omdb/get-film-omdb.component';
import { MainComponent } from './components/main/main.component';
import { SearchFilmOmdbComponent } from './components/main/search-film-omdb/search-film-omdb.component';
import { RegisterComponent } from './components/register/register.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [RouteGuardService],
    canActivateChild: [RouteGuardService],
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
        path: 'searchfilm',
        component: SearchFilmOmdbComponent
      },
      {
        path: 'filmlist',
        component: FilmListComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
