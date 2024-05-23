import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Movie} from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>('assets/movies.json')
        .pipe(
            delay( Math.random() * 1000 + 500 )
        );
  }
}
