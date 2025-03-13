import { Component, OnInit } from '@angular/core';
import { PlanPagosService } from '../../services/plan-pagos.service';
import { PlanPago } from '../../models/plan-pagos.model';

@Component({
  selector: 'app-plan-pagos',
  standalone: false,
  templateUrl: './plan-pagos.component.html',
  styleUrls: ['./plan-pagos.component.scss']
})
export class PlanPagosComponent implements OnInit {
  planPagos: PlanPago[] = [];
  prestamoSeleccionado: number | null = null;

  constructor(private planPagosService: PlanPagosService) {}

  ngOnInit(): void {}

  obtenerPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      alert('Por favor, ingrese un ID de préstamo.');
      return;
    }

    this.planPagosService.obtenerPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: (data) => this.planPagos = data,
      error: () => {
        alert('No se encontró un plan de pagos para este préstamo.');
        this.planPagos = [];
      }
    });
  }

  generarPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      alert('Por favor, ingrese un ID de préstamo.');
      return;
    }

    this.planPagosService.generarPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: (data) => {
        alert('Plan de pagos generado con éxito.');
        this.planPagos = data; // 🔹 Almacenamos los datos directamente
      },
      error: () => alert('No se pudo generar el plan de pagos.')
    });
  }

  eliminarPlanDePagos(): void {
    if (!this.prestamoSeleccionado) {
      alert('Por favor, ingrese un ID de préstamo.');
      return;
    }

    this.planPagosService.eliminarPlanDePagos(this.prestamoSeleccionado).subscribe({
      next: () => {
        alert('Plan de pagos eliminado con éxito.');
        this.planPagos = []; // 🔹 Limpiamos la tabla
      },
      error: () => alert('No se pudo eliminar el plan de pagos.')
    });
  }
}
