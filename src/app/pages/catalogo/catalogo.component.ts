import {Component} from '@angular/core';
import {MoviesComponent} from "../../components/movies/movies.component";
import {MoviesService} from "../../services/movies.service";
import {Movie} from "../../models/movie";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-catalogo',
    standalone: true,
    imports: [
        MoviesComponent,
        NgClass,
        FormsModule,
        MatProgressSpinner,
        FooterComponent,
        RouterLink
    ],
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

    listMovies: Movie[] = [];
    //ordenar
    lastSortMethod: string = 'popular';
    lastFilterButton: string = 'popular';

    //filtro
    searchInput: string = '';
    originalListMovies: Movie[] = [];

    constructor(
        private moviesService: MoviesService
    ) {
        this.moviesService.getMovies().subscribe({
            next: response => {
                console.log(response);
                this.listMovies = response;
                this.originalListMovies = [...this.listMovies];
            },
            error: error => {
                console.error('There was an error!', error);
            }
        });
    }

    filterMovies() {
        if (this.searchInput) {
            this.listMovies = this.originalListMovies.filter(movie => movie.title.toLowerCase().includes(this.searchInput.toLowerCase()));
        }else{
            this.listMovies = [...this.originalListMovies];
        }
    }

    sortMovies(sortMethod: string, compareFn: (a: Movie, b: Movie) => number) {
        if (this.lastSortMethod === sortMethod) {
            this.listMovies.reverse();
            this.lastSortMethod = '';
        } else {
            this.listMovies.sort(compareFn);
            this.lastSortMethod = sortMethod;
        }
    }

    fPopular() {
        this.sortMovies('popular', (a, b) => b.popularity - a.popularity);
        this.lastFilterButton = 'popular';
    }

    fTitulo() {
        this.sortMovies('titulo', (a, b) => a.title.localeCompare(b.title));
        this.lastFilterButton = 'titulo';
    }

    fFecha() {
        this.sortMovies('fecha', (a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        this.lastFilterButton = 'fecha';
    }

    fVotos() {
        this.sortMovies('votos', (a, b) => b.vote_average - a.vote_average);
        this.lastFilterButton = 'votos';
    }

}
