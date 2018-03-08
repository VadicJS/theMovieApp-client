import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PopularComponent } from "./popular/popular.component";
import { TopComponent } from "./top/top.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";
import { NowComponent } from "./now/now.component";
import { MoviedetailsComponent } from "./moviedetails/moviedetails.component";


export const router: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full'},
  { path: 'popular', component: PopularComponent, data: {title: 'popular', depth: 1}},
  { path: 'top_rated', component: TopComponent, data: {title: 'Top', depth: 1}},
  { path: 'upcoming', component: UpcomingComponent, data: {title: 'upcoming', depth: 1}},
  { path: 'now_playing', component: NowComponent, data: {title: 'now_playing', depth: 1}},
  { path: 'upcoming/movie/:movieId', component: MoviedetailsComponent, data: {title: "movie details", depth: 1}},
  { path: 'top_rated/movie/:movieId', component: MoviedetailsComponent, data: {title: "movie details", depth: 1}},
  { path: 'now_playing/movie/:movieId', component: MoviedetailsComponent, data: {title: "movie details", depth: 1}},
  { path: 'popular/movie/:movieId', component: MoviedetailsComponent, data: {title: "movie details", depth: 1}}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
