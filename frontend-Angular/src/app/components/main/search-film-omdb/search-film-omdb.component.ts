import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbMovie } from 'src/app/models/omdb-movie';
import { AuthService } from 'src/app/services/auth.service';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search-film-omdb',
  templateUrl: './search-film-omdb.component.html',
  styleUrls: ['./search-film-omdb.component.scss']
})
export class SearchFilmOmdbComponent {


  title = '';
  omdbMovies: OmdbMovie[] = [];


  constructor(
    private omdbService: OmdbService,
    private authService: AuthService,
    private router: Router
  ) { }


  searchMovies() {
    if (this.title == '') {
      alert('Please insert a title')
    } else {
      this.omdbService.searchMovies(this.title).subscribe(
        res => {
          if (res.success) {
            if (res.message == '') {
              this.omdbMovies = res.data;
            } else {
              alert(res.message);
            }
          } else {
            alert(res.message);
            console.error(res);
          }
        },
        (error: HttpHeaderResponse) => {
          console.error(error);
          this.authService.logout();
          this.router.navigate(['login']);
        }
      );
    }
  }


}
