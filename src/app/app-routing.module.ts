import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrestamoListComponent } from './components/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PlanPagosComponent } from './components/plan-pagos/plan-pagos.component';


const routes: Routes = [
  { path: 'prestamos', component: PrestamoListComponent },
  { path: 'prestamos/agregar', component: PrestamoFormComponent },
  { path: 'prestamos/editar/:id', component: PrestamoFormComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'plan-pagos', component: PlanPagosComponent },
  { path: '', redirectTo: '/prestamos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
