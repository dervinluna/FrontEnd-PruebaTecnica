import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor() {}

  showNotification(message: string, type: 'success' | 'danger' | 'warning' | 'info') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} border-0 show`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${message}
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
}
