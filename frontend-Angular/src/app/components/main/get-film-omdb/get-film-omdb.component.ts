import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OmdbMovie } from 'src/app/models/omdb-movie';
import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
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
  user!: User;


  constructor(
    private omdbService: OmdbService,
    private authService: AuthService,
    private router: Router,
    private moviesService: MoviesService,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit() {
    this.user = this.authService.getUser();
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
            } else {
              alert(res.message);
            }
            console.log(res);
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


  searchMovieByImdbId() {
    if (this.imdbId == '') {
      alert('Please insert a imdbId')
    } else {
      this.omdbService.searchMovieByImdbId(this.imdbId).subscribe(
        res => {
          if (res.success) {
            if (res.message == '') {
              this.omdbMovie = res.data;
            } else {
              alert(res.message);
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


  storeMovie() {
    this.moviesService.storeMovie(this.user.id, this.omdbMovie!).subscribe(
      res => {
        if (res.success) {
          this.snackBar.open('Saved!', '', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 3000,
            panelClass: 'text-center'
          });
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
