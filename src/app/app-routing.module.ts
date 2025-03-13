import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoListComponent } from './components/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';

const routes: Routes = [
  { path: 'prestamos', component: PrestamoListComponent },
  { path: 'prestamos/agregar', component: PrestamoFormComponent },
  { path: 'prestamos/editar/:id', component: PrestamoFormComponent },
  { path: '', redirectTo: '/prestamos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
