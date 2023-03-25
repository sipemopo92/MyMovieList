import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { Director } from 'src/app/models/director';
import { Movie } from 'src/app/models/movie';
import { User } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent {


  user!: User;
  movies: Movie[] = [];
  displayedColumns = ['title', 'year', 'released', 'runtime', 'writer', 'actors', 'directors', 'country', 'imdb_id', 'delete'];


  constructor(
    private authService: AuthService,
    private router: Router,
    private moviesService: MoviesService,
    private snackBar: MatSnackBar
  ) { }


  ngOnInit() {
    this.user = this.authService.getUser();
    this.getMovies()
  }


  getMovies() {
    this.moviesService.getMovies(this.user.id).subscribe(
      res => {
        if (res.success) {
          this.movies = res.data;
        } else {
          console.error(res.message);
        }
      },
      (error: HttpHeaderResponse) => {
        console.error(error);
        this.authService.logout();
        this.router.navigate(['login']);
      }
    )
  }


  deleteRow(movie: any){
    this.moviesService.removeUserMovie(this.user.id, movie.id).subscribe(
      res => {
        if (res.success) {
          this.snackBar.open('Deleted!', '', {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration:  3000,
            panelClass: 'text-center'
          });
          this.getMovies();
        } else {
          console.error(res.message);
        }
      },
      (error: HttpHeaderResponse) => {
        console.error(error);
        this.authService.logout();
        this.router.navigate(['login']);
      }
    )
  }


  getArrNames(arr: Actor[] | Director[]): string {
    return arr.map(elem => elem.name).join(', ');
  }

  
}
