import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable, of } from 'rxjs';
import { Movie } from '../Movie';
import { MovieList } from '../MovieList';
import { PARAMETERS } from '../parameters';
import { MovieDetail } from '../MovieDetail';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  searchBoxText: string = "Type movie name or actor name here, to start the search...";
  moviesTitle: string = "Movies Top";
  movieListTop: Movie[];
  movieSelected: Movie;
  counter: any;
  position: number = 0;
  searchParameter: string = "Movie";

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	//this.movieService.currentMessage.subscribe(message => this.response = message);
    this.getMoviesListTop();
  }

  getMoviesListTop(){
    this.movieService.getMoviesListTop().subscribe(
      (result: MovieList) => {
          if(result){
            this.movieListTop = result.results.slice(0,12);
            this.movieListTop = this.getImageMovieFullPath(this.movieListTop);
            this.getMovieDetailTop(this.movieListTop[1]);            
          }
      }
    );  
  }

  getImageMovieFullPath(movies: Movie[]) :Movie[]{
    for(let movie of movies){
      movie.poster_path = PARAMETERS.IMG_URL_BASE+movie.poster_path;
      movie.backdrop_path = PARAMETERS.IMG_URL_BASE+movie.backdrop_path;
    }
    return movies;
  }

  getMovieDetailTop(movie: Movie){
    if(movie){
      clearInterval(this.counter);
      this.movieSelected = movie;
      this.movieService.getMovieDetail(movie.id).subscribe(
        (result: MovieDetail) => {
          if(result){
            console.log("####"+JSON.stringify(this.movieSelected));
            console.log("####"+JSON.stringify(result));
            this.movieSelected.movieDetail = result;
            this.movieService.sendDetail(this.movieSelected);
          }
        });
    }
  }

  setSearchParameter(parameter){
    this.searchParameter = parameter;
    console.log(this.searchParameter);
  }

}
