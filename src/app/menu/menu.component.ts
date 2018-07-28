import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Observable, of } from 'rxjs';
import { Movie } from '../Movie';
import { MovieList } from '../MovieList';
import { PARAMETERS } from '../parameters';
import { TvShow } from '../TvShow';
import { TvShowList } from '../TvShowList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cities: string[] = ["París", "London", "Roma", "Tokyo"];
  response: any;
  searchBoxText: string = "Type movie name or actor name here, to start the search...";
  moviesTitle: string = "Movies Top";
  tvTitle: string = "TV Shows Top";
  movieListTop: Movie[];
  tvShowListTop: TvShow[];


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	//this.movieService.currentMessage.subscribe(message => this.response = message);
    this.getMoviesListTop();    
    this.getTvShowListTop();
  }

  getMoviesListTop(){
    this.movieService.getMoviesListTop().subscribe(
      (result: MovieList) => {
          if(result){
            this.movieListTop = result.results.slice(0,12);
            this.movieListTop = this.getImageMovieFullPath(this.movieListTop);
          }
      }
    );  
  }

  getTvShowListTop(){
    this.movieService.getTvShowListTop().subscribe(
      (result: TvShowList) => {
          if(result){
            this.tvShowListTop = result.results.slice(0,12);
            this.tvShowListTop = this.getImageTvShowFullPath(this.tvShowListTop);
          }
      }
    );  
  }  

  getImageMovieFullPath(movies: Movie[]) :Movie[]{
    for(let movie of movies){
      movie.poster_path = PARAMETERS.IMG_URL_BASE+movie.poster_path;
    }
    return movies;
  }

  getImageTvShowFullPath(tvShows: TvShow[]) :TvShow[]{
    for(let tvShow of tvShows){
      tvShow.poster_path = PARAMETERS.IMG_URL_BASE+tvShow.poster_path;
    }
    return tvShows;
  }
}
