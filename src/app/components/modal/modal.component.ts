import {Component, Inject} from '@angular/core';
import {Movie} from "../../models/movie";
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal',
  standalone: true,
    imports: [
        DatePipe
    ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
    movie: Movie;

    constructor(
        public dialogRef: MatDialogRef<ModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Movie
    ) {
        this.movie = data;
    }

    onClose(): void {
        this.dialogRef.close();
    }
}
