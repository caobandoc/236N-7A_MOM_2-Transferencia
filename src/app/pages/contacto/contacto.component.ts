import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
    selector: 'app-contacto',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterLink,
        NgClass,
        FooterComponent
    ],
    templateUrl: './contacto.component.html',
    styleUrl: './contacto.component.css'
})
export class ContactoComponent {
    success: boolean = false;
    contacto = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required])
    });

    onSubmit() {
        if (this.contacto.valid) {
            this.success = true;
        }
    }

}
