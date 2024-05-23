import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";
import {MovieComponent} from "../movie/movie.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    MovieComponent
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  @Input() listMovies: Movie[] = [];
}
