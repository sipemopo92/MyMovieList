import { HttpHeaderResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  displayedColumns = ['title', 'year', 'released', 'runtime', 'writer', 'country', 'imdb_id'];

  constructor(
    private authService: AuthService,
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.moviesService.getMovies(this.user.id).subscribe(
      res => {
        if (res.success) {
          this.movies = res.data;
          console.log(res.data);
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

}
