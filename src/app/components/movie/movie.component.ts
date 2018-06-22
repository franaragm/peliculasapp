import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie:any;
  backTo:string = "";
  termSearch:string;

  constructor(public _ms: MovieService,
              public _ar: ActivatedRoute) {

    this._ar.params.subscribe(params => {

      console.log(params);
      this.backTo = params.page;

      if (params.term) {
        this.termSearch = params.term;
      }

      this._ms.getMovie(params.id).subscribe( data_movie => {
        console.log(data_movie);
        this.movie = data_movie;
      });
    });
  }

  ngOnInit() {
  }

}
