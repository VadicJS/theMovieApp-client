import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  movies: Movie[];
  param: String;


  ngOnInit() {
    this.param= 'top_rated';
    return this.movieService.getMovies(this.param).then(movies => this.movies = movies)
  }
}
