import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {


  constructor(private movieService: MovieService) { }

  movies: Movie[];
  param: String;


  ngOnInit() {
    this.param= 'top_rated';
    return this.movieService.getMovies(this.param).then(movies => this.movies = movies)
  }

}
