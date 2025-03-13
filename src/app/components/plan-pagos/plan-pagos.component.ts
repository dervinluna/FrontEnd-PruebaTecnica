import { Component, OnInit } from '@angular/core';
import { PlanPagosService } from '../../services/plan-pagos.service';
import { PlanPago } from '../../models/plan-pagos.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-plan-pagos',
  standalone: false,
  templateUrl: './plan-pagos.component.html',
  styleUrls: ['./plan-pagos.component.scss']
})
export class PlanPagosComponent implements OnInit {
  planPagos: PlanPago[] = [];
  prestamoSeleccionado: number | null = null;

  constructor(
    private planPagosService: PlanPagosService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  obtenerPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      this.notificationService.showNotification('⚠️ Por favor, ingrese un ID de préstamo.', 'warning');
      return;
    }

    this.planPagosService.obtenerPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: (data) => {
        this.planPagos = data;
        this.notificationService.showNotification('✅ Plan de pagos cargado con éxito.', 'success');
      },
      error: () => {
        this.notificationService.showNotification('❌ No se encontró un plan de pagos para este préstamo.', 'danger');
        this.planPagos = [];
      }
    });
  }

  generarPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      this.notificationService.showNotification('⚠️ Por favor, ingrese un ID de préstamo.', 'warning');
      return;
    }

    this.planPagosService.generarPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: (data) => {
        this.planPagos = data;
        this.notificationService.showNotification('✅ Plan de pagos generado con éxito.', 'success');
      },
      error: () => {
        this.notificationService.showNotification('❌ No se pudo generar el plan de pagos.', 'danger');
      }
    });
  }

  eliminarPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      this.notificationService.showNotification('⚠️ Por favor, ingrese un ID de préstamo.', 'warning');
      return;
    }

    this.planPagosService.eliminarPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: (response) => {
        this.planPagos = [];
        this.notificationService.showNotification(response.mensaje, 'success'); // ✅ Usa el mensaje del backend
      },
      error: (error) => {
        this.notificationService.showNotification(error.error?.mensaje || '❌ No se pudo eliminar el plan de pagos.', 'danger');
      }
    });
  }

}
