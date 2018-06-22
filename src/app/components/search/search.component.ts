import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string = "";

  constructor(public _ms: MovieService,
              public _ar: ActivatedRoute) {

    this._ar.params.subscribe(params => {
      console.log(params);
      if (params['term']) {
        this.search = params['term'];
        this.searchMovie();
      }
    });
}

  ngOnInit() {
  }

  searchMovie(){
    if (this.search.length == 0){
      return;
    }

    this._ms.searchMovie(this.search).subscribe();

  }

}
