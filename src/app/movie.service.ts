import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PARAMETERS } from './parameters';
import { URL_LIST } from './parameters';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Movie } from './Movie';
import { MovieList } from './MovieList';
import { TvShow } from './TvShow';
import { TvShowList} from './TvShowList';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  	url: string;
	response: Observable<any>;

		
	constructor(private http: HttpClient) {
	  	
	}

	
	getMoviesListTop() :Observable<MovieList>{
		this.url = URL_LIST.URL_MOVIES_TOP;
		console.log("$$$$$$$$$$$ "+this.url);
		return this.http.get<MovieList>(this.url);		
	}

	getTvShowListTop() :Observable<TvShowList>{
		this.url = URL_LIST.URL_TVSHOW_TOP;
		console.log("$$$$$$$$$$$ "+this.url);
		return this.http.get<TvShowList>(this.url);		
	}

}
