import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  billboard:any;
  populars:any;

  constructor(private _ms: MovieService) {

    this._ms.getMostPopular().subscribe(data=>this.populars = data);

    this._ms.getNewMovies().subscribe(data=>this.billboard = data);

  }

  ngOnInit() {
  }

}
