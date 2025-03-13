### **📌 README.md**
```markdown
# 📌 Préstamos App - Frontend

Frontend desarrollado en **Angular** para la gestión de préstamos y generación de planes de pago. Esta aplicación permite a los usuarios registrar préstamos, gestionar pagos y visualizar planes de pago de manera interactiva.

---

## 🚀 Características
- CRUD de préstamos
- Generación y eliminación de planes de pago
- Notificaciones en tiempo real con **Bootstrap Alerts**
- API RESTful con consumo de servicios HTTP
- Diseño responsivo con **Bootstrap 5**
- Arquitectura modular con **Angular Services y Components**

---

## 📦 **Requisitos Previos**
Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js 18+](https://nodejs.org/en/) (incluye npm)
- [Angular CLI](https://angular.io/cli) (Instalar con `npm install -g @angular/cli`)
- [Git](https://git-scm.com/downloads) (Opcional, para clonar el repositorio)
- Un backend corriendo en **ASP.NET Core** ([Configuración aquí](https://github.com/dervinluna/BackendPruebaTecnica))

---

## ⚙️ **Configuración del Proyecto**
### 1️⃣ Clonar el Repositorio

git clone https://github.com/dervinluna/FrontendPruebaTecnica.git
cd FrontendPruebaTecnica


### 2️⃣ Instalar Dependencias
Ejecuta el siguiente comando dentro del directorio del proyecto:
```bash
npm install
```
Esto instalará todas las dependencias necesarias.

### 3️⃣ Configurar la URL del Backend
📌 **Ubicación:** `proxy.conf.json`
{
  "/api": {
    "target": "https://localhost:7044",
    "secure": false,
    "changeOrigin": true
  }
}

Si el backend se ejecuta en otro puerto, ajústalo aquí.

---

## 🏃 **Ejecutar el Proyecto**
Para iniciar el frontend en modo desarrollo, usa el siguiente comando:

```bash
ng serve
```

Esto levantará un servidor local en:
```
http://localhost:4200/
```
🔹 **NOTA:** La aplicación se actualizará automáticamente cuando hagas cambios en el código.

---

## 🛠 **Estructura del Proyecto**
```
📂 FrontendPruebaTecnica
 ┣ 📂 src
 ┃ ┣ 📂 app
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 prestamo-list
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-list.component.ts
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-list.component.html
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-list.component.scss
 ┃ ┃ ┃ ┣ 📂 prestamo-form
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-form.component.ts
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-form.component.html
 ┃ ┃ ┃ ┃ ┣ 📄 prestamo-form.component.scss
 ┃ ┃ ┃ ┣ 📂 plan-pagos
 ┃ ┃ ┃ ┃ ┣ 📄 plan-pagos.component.ts
 ┃ ┃ ┃ ┃ ┣ 📄 plan-pagos.component.html
 ┃ ┃ ┃ ┃ ┣ 📄 plan-pagos.component.scss
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┃ ┣ 📄 prestamo.service.ts
 ┃ ┃ ┃ ┣ 📄 plan-pagos.service.ts
 ┃ ┃ ┃ ┣ 📄 notification.service.ts
 ┃ ┃ ┣ 📂 models
 ┃ ┃ ┃ ┣ 📄 prestamo.model.ts
 ┃ ┃ ┃ ┣ 📄 plan-pagos.model.ts
 ┃ ┃ ┣ 📂 shared
 ┃ ┃ ┃ ┣ 📄 navbar.component.ts
 ┃ ┃ ┃ ┣ 📄 navbar.component.html
 ┃ ┃ ┣ 📄 app.module.ts
 ┃ ┃ ┣ 📄 app-routing.module.ts
 ┃ ┃ ┣ 📄 app.component.ts
 ┣ 📄 angular.json
 ┣ 📄 package.json
 ┣ 📄 tsconfig.json
 ┣ 📄 README.md
```

---

## 🔗 **Endpoints del Backend**
Este frontend se conecta al backend en ASP.NET Core a través de los siguientes endpoints:

### 📌 **Préstamos**
| Método | Endpoint                | Descripción                     |
|--------|-------------------------|---------------------------------|
| GET    | `/api/Prestamo`         | Obtener todos los préstamos    |
| GET    | `/api/Prestamo/{id}`    | Obtener un préstamo por ID     |
| POST   | `/api/Prestamo`         | Crear un nuevo préstamo        |
| PUT    | `/api/Prestamo/{id}`    | Actualizar un préstamo         |
| DELETE | `/api/Prestamo/{id}`    | Eliminar un préstamo           |

### 📌 **Plan de Pagos**
| Método | Endpoint                             | Descripción                           |
|--------|--------------------------------------|---------------------------------------|
| GET    | `/api/PlanPagos/{prestamoId}`       | Obtener plan de pagos de un préstamo |
| POST   | `/api/PlanPagos/{prestamoId}/generar` | Generar plan de pagos               |
| DELETE | `/api/PlanPagos/{prestamoId}/eliminar` | Eliminar plan de pagos               |

---

## 🎨 **Diseño y Notificaciones**
- La aplicación usa **Bootstrap 5** para la interfaz.
- Se implementaron **notificaciones** para feedback al usuario con `NotificationService`.
- Componentes organizados en **módulos reutilizables**.

---

## 📢 **Notas**
- **⚠️ Importante**: Antes de probar el frontend, asegúrate de que el backend está corriendo correctamente en **ASP.NET Core**.
- Si cambias el puerto del backend, **actualiza la variable `apiUrl` en `environment.ts`**.
- Puedes usar herramientas como **Postman** o **Swagger** para verificar los endpoints del backend.

---

## 📌 **Contacto**
Si tienes dudas, puedes escribirme a [dervinardanihernandezluna2001@gmail.com] o en [GitHub](https://github.com/dervinluna). 🚀


---

✅ **Este README incluye:**
1. **Pasos detallados** para instalar y correr el frontend.
2. **Configuración de la URL del backend** (`environment.ts`).
3. **Lista de endpoints** usados por el frontend.
4. **Estructura del proyecto Angular**.
5. **Notas y consejos** para evitar errores comunes.
