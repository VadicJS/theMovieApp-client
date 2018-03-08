import { Review } from './../model/review';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Movie } from '../model/movie';
import { Credits } from '../model/credits';
import { Production_companies } from '../model/production_companies';
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {


  movie = new Movie();
  smovie: Movie[];
  credits: Credits[];
  reviews: Review[];
  showReviews = false;
  showSimilar = false;
  production_companies: Production_companies[];
  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.movieService.getMovie(+params['movieId']))
    .subscribe(movie => this.movie = movie);

  }

  getReviews(movieId: number): Promise<Review[]>{
    this.showReviews = true;
    return this.movieService.getReviews(movieId).then(reviews => this.reviews = reviews);
  }

  getSimilarMovies(movieId: number): Promise<Movie[]>{
    this.showSimilar = true;
    return this.movieService.getSimilarMovies(movieId).then(smovie => this.smovie = smovie);
  }
}
