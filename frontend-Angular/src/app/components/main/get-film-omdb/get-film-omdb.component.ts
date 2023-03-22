import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbMovie } from 'src/app/models/omdb-movie';
import { AuthService } from 'src/app/services/auth.service';
import { OmdbService } from 'src/app/services/omdb.service';


@Component({
  selector: 'app-get-film-omdb',
  templateUrl: './get-film-omdb.component.html',
  styleUrls: ['./get-film-omdb.component.scss']
})
export class GetFilmOmdbComponent {

  title = '';
  imdbId = '';
  omdbMovie: OmdbMovie | null = null;

  constructor(private omdbService: OmdbService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  searchMovieByTitle() {
    if (this.title == '') {
      alert('Please insert a title')
    } else {
      this.omdbService.searchMovieByTitle(this.title).subscribe(
        res => {
          if (res.success) {
            if (res.message == '') {
              this.omdbMovie = res.data;
            }
            console.log(res);
          } else {
            console.error(res)
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

  searchMovieByImdbId() {
    if (this.imdbId == '') {
      alert('Please insert a imdbId')
    } else {
      this.omdbService.searchMovieByImdbId(this.imdbId).subscribe(
        res => {
          if (res.success) {
            if (res.message == '') {
              this.omdbMovie = res.data;
            }
          } else {
            console.error(res)
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
