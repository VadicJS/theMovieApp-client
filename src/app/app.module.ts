import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterLink } from '@angular/router';
import { routes } from './routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { PopularComponent } from './popular/popular.component';
import { TopComponent } from './top/top.component';
import { NowComponent } from './now/now.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { QuestionableBooleanPipe } from './shared/boolean';


@NgModule({
  declarations: [
    AppComponent,
    PopularComponent,
    TopComponent,
    NowComponent,
    MoviedetailsComponent,
    UpcomingComponent,
    QuestionableBooleanPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    routes
  ],
  providers: [RouterLink, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
