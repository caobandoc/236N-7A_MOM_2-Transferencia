import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterLink,
        NgOptimizedImage,
        FooterComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
