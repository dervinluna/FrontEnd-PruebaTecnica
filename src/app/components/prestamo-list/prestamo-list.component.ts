import { Component, OnInit } from '@angular/core';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from '../../models/prestamo.model';
import * as bootstrap from 'bootstrap';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-prestamo-list',
  standalone: false,
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.scss']
})
export class PrestamoListComponent implements OnInit {
  prestamos: Prestamo[] = [];
  prestamoSeleccionado: Prestamo | null = null;

  constructor(
    private prestamoService: PrestamoService,
    private notificationService: NotificationService // 🔔 Inyectamos el servicio
  ) {}

  ngOnInit(): void {
    this.cargarPrestamos();
  }

  cargarPrestamos(): void {
    this.prestamoService.obtenerPrestamos().subscribe(data => {
      this.prestamos = data;
    });
  }

  eliminarPrestamo(id: number): void {
    if (confirm('¿Estás seguro de eliminar este préstamo?')) {
      this.prestamoService.eliminarPrestamo(id).subscribe({
        next: (response) => {
          this.notificationService.showNotification('Préstamo eliminado con éxito.', 'success'); // 🔔 Notificación de éxito
          this.prestamos = this.prestamos.filter(prestamo => prestamo.id !== id);
        },
        error: (error) => {
          console.error('Error al eliminar:', error);
          this.notificationService.showNotification('Error al eliminar el préstamo.', 'danger'); // 🔔 Notificación de error
        }
      });
    }
  }

  // Método para abrir el modal y asignar datos si es edición
  abrirModal(prestamo?: Prestamo): void {
    this.prestamoSeleccionado = prestamo ? { ...prestamo } : null;

    setTimeout(() => {
      const modalElement = document.getElementById('prestamoModal');
      if (modalElement) {
        new bootstrap.Modal(modalElement).show();
      }
    }, 50);
  }

  // Método para cerrar el modal y actualizar la lista
  cerrarModal(): void {
    this.prestamoSeleccionado = null;
    const modalElement = document.getElementById('prestamoModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
    this.cargarPrestamos();
  }
}
