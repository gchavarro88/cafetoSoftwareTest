import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PARAMETERS } from './parameters';
import { URL_LIST } from './parameters';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Movie } from './Movie';
import { MovieList } from './MovieList';
import { MovieDetail } from './MovieDetail';


const ID_MOVIE: string = "ID_MOVIE";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  	url: string;
  	movie: Movie;
	private messageSource = new BehaviorSubject(this.movie);
	contentMessage = this.messageSource.asObservable();

		
	constructor(private http: HttpClient) {
	  	
	}

	
	getMoviesListTop() :Observable<MovieList>{
		this.url = URL_LIST.URL_MOVIES_TOP;
		return this.http.get<MovieList>(this.url);		
	}

	getMovieDetail(idMovie) {
		this.url = URL_LIST.URL_MOVIE_DETAIL;
		this.url = this.url.replace(ID_MOVIE, idMovie);
		return this.http.get<MovieDetail>(this.url);
	}

	sendDetail(movie: Movie) {
	  	this.messageSource.next(movie);
	}

}
