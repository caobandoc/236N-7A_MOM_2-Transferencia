import { Component } from '@angular/core';
import {MoviesComponent} from "../../components/movies/movies.component";
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    MoviesComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  listMovies: Movie[] = [];

  constructor(
    private moviesService: MoviesService
  ) {
    this.moviesService.getMovies().subscribe({
      next: response => {
        console.log(response);
        this.listMovies = response;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

}
