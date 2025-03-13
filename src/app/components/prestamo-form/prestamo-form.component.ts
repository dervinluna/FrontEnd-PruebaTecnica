import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestamoService } from '../../services/prestamo.service';
import { Prestamo } from '../../models/prestamo.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-prestamo-form',
  standalone: false,
  templateUrl: './prestamo-form.component.html',
  styleUrls: ['./prestamo-form.component.scss']
})
export class PrestamoFormComponent implements OnInit, OnChanges {
  @Input() prestamo: Prestamo | null = null;
  @Output() cerrarModal = new EventEmitter<void>();

  prestamoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private prestamoService: PrestamoService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.prestamoForm = this.fb.group({
      dpi: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
      nombreCliente: ['', [Validators.required, Validators.maxLength(100)]],
      monto: ['', [Validators.required, Validators.min(100), Validators.max(1000000)]],
      cuotas: ['', [Validators.required, Validators.min(1), Validators.max(360)]],
    });

    // Si el formulario recibe un préstamo, lo llenamos
    if (this.prestamo) {
      this.prestamoForm.patchValue(this.prestamo);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['prestamo']) {
      if (this.prestamo) {
        this.prestamoForm.patchValue(this.prestamo);
      } else {
        this.prestamoForm.reset();
        this.prestamoForm.markAsPristine();
      }
    }
  }

  guardarPrestamo(): void {
    if (this.prestamoForm.valid) {
      const prestamo: Prestamo = { ...this.prestamoForm.value, id: this.prestamo?.id };

      if (this.prestamo?.id) {
        this.prestamoService.actualizarPrestamo(prestamo).subscribe({
          next: () => {
            this.notificationService.showNotification('✅ Préstamo actualizado con éxito.', 'success');
            this.cerrarModal.emit();
          },
          error: () => {
            this.notificationService.showNotification('❌ Error al actualizar el préstamo.', 'danger');
          }
        });
      } else {
        this.prestamoService.agregarPrestamo(prestamo).subscribe({
          next: () => {
            this.notificationService.showNotification('✅ Préstamo agregado con éxito.', 'success');

            // 🔹 Resetear el formulario después de agregar el préstamo
            this.prestamoForm.reset();
            this.prestamoForm.markAsPristine();
            this.prestamoForm.markAsUntouched();

            this.cerrarModal.emit();
          },
          error: () => {
            this.notificationService.showNotification('❌ Error al agregar el préstamo.', 'danger');
          }
        });
      }
    }
  }

}
