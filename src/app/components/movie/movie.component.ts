import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() movie: Movie = {
    adult: false,
    backdrop_path: '/',
    genre_ids: [0, 1, 2],
    id: 0,
    original_language: 'en',
    original_title: 'original test',
    overview: 'loremp ipsum',
    popularity: 0,
    poster_path: '/',
    release_date: new Date().toISOString(),
    title: 'Title test',
    video: false,
    vote_average: 0,
    vote_count: 0
  };
}
