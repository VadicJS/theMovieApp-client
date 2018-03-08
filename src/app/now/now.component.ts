import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[];
  param: String;


  ngOnInit() {
    this.param= 'now_playing';
    return this.movieService.getMovies(this.param).then(movies => this.movies = movies)
  }

}
