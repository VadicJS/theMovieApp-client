import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Movie } from './model/movie';
import { Moviedetails } from './model/moviedetails';
import { Review } from './model/review';
import { Credits } from './model/credits';

@Injectable()
export class MovieService {

  constructor(private http: Http) { }

  private moviesUrl= "/api"
  private headers = new Headers({'Content-Type': 'application/json'})

  getMovies(param: String): Promise<Movie[]>{
    const url = `${this.moviesUrl}/${param}`
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Movie[]);
  }

  getMovie(movieId: number): Promise<Moviedetails>{
    const url = `${this.moviesUrl}/movie/${movieId}`
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Moviedetails);
  }

  getSimilarMovies(movieId: number): Promise<Movie[]>{
    const url =`${this.moviesUrl}/movie/${movieId}/similar`
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Movie[]);
  }

  getReviews(movieId: number): Promise<Review[]>{
    const url = `${this.moviesUrl}/movie/${movieId}/reviews`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Review[]);
  }

  getCredits(movieId: number): Promise<Credits[]>{
    const url = `${this.moviesUrl}/movie/${movieId}/credits`
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as Credits[]);
  }
}
