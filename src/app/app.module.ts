import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PrestamoListComponent } from './components/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanPagosComponent } from './components/plan-pagos/plan-pagos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PrestamoListComponent,
    PrestamoFormComponent,
    PostsListComponent,
    NavbarComponent,
    PlanPagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
