import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CatalogoComponent} from "./pages/catalogo/catalogo.component";
import {ContactoComponent} from "./pages/contacto/contacto.component";
import {EmptyComponent } from "./pages/empty/empty.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'catalogo',
        component: CatalogoComponent
    }, {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: '**',
        component: EmptyComponent
    }
];
