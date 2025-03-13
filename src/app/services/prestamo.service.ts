import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo.model';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private apiUrl = '/api/Prestamo'; // Usando proxy.conf.json

  constructor(private http: HttpClient) {} // ✅ Debe estar correctamente inyectado

  obtenerPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  obtenerPrestamoPorId(id: number): Observable<Prestamo> {
    return this.http.get<Prestamo>(`${this.apiUrl}/${id}`);
  }

  agregarPrestamo(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  actualizarPrestamo(prestamo: Prestamo): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${prestamo.id}`, prestamo); // ✅ Asegurar que el id va en el objeto
  }


  eliminarPrestamo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
