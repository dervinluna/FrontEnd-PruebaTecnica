import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PrestamoListComponent } from './components/prestamo-list/prestamo-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // ✅ Importar Bootstrap

@NgModule({
  declarations: [
    AppComponent,
    PrestamoListComponent,
    PrestamoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule // ✅ Agregar aquí
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // ✅ Nueva forma de importar HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
