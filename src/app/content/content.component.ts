import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  message:any;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //this.movieService.currentMessage.subscribe(message => this.message = message);
  }

}
