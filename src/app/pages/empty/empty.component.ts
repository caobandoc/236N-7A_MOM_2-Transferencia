import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-empty',
  standalone: true,
    imports: [
        RouterLink,
        FooterComponent
    ],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyComponent {

}
