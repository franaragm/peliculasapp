import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class MovieService {

  private apikey:string = "d2c05341b17d8583bd60a8ecba97576e";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  public movies:any[] = [];

  constructor( private http: HttpClient ) { }

  private getURL(request: string, language?: string): string {
    return `${this.urlMoviedb}${request}&api_key=${this.apikey}&language=${language}`;
  }

  public getNewMovies(){

    let from_date = new Date();
    let until_date = new Date();
    until_date.setDate( until_date.getDate() + 7 );

    let fromDateStr = `${from_date.getFullYear()}-${from_date.getMonth()+1}-${from_date.getDate()}`;
    let untilDateStr = `${until_date.getFullYear()}-${until_date.getMonth()+1}-${until_date.getDate()}`;

    const request = `/discover/movie?primary_release_date.gte=${ fromDateStr }&primary_release_date.lte=${ untilDateStr }`;
    const x = this.getURL(request, 'es');

    return this.http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map((res: any) => res.results));

  }

  public getMostPopular(){

    const request = '/discover/movie?sort_by=popularity.desc';
    const x = this.getURL(request, 'es');

    return this.http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map((res: any) => res.results));

  }

  public getMostPopularKids(){

    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    const x = this.getURL(request, 'es');

    return this.http.jsonp(x, 'callback=JSONP_CALLBACK').pipe(map((res: any) => res.results));

  }

  public searchMovie( texto:string ){

    const request = `/search/movie?query=${ texto }&sort_by=popularity.desc`;
    const x = this.getURL(request, 'es');

    return this.http.jsonp(x, 'callback=JSONP_CALLBACK')
      .pipe(map((res: any) => {

        this.movies = res.results;
        console.log(this.movies);
        return res;

      }));
  }

  public getMovie( id:string ){
    let url = `${this.urlMoviedb}/movie/${ id }?api_key=${this.apikey}&language=es`;
    return this.http.jsonp(url, 'callback=JSONP_CALLBACK').pipe(map((res: any) => res));
  }

}

