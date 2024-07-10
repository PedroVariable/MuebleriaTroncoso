import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GraciasComponent } from './gracias/gracias.component';
import { EnvioComponent } from './envio/envio.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BagComponent } from './bag/bag.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gracias', component: GraciasComponent },
  { path: 'envio', component: EnvioComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'bag', component: BagComponent }
];
