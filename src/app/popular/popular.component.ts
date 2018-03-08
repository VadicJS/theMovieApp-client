import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movies: Movie[];
  param: String;


  ngOnInit() {
    this.param= 'popular';
    return this.movieService.getMovies(this.param).then(movies => this.movies = movies)
  }

}
