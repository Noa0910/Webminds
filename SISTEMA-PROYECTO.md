# Sistema de Gestión de Proyectos para Clientes - WebMinds

## Descripción
Sistema interno completamente oculto para que los **clientes** puedan gestionar y seguir el progreso de sus proyectos. Accesible solo mediante enlaces secretos y protegido por autenticación. Permite visualizar el progreso, tareas, actividades, cronología del proyecto y **chatear con el equipo**.

## Características Principales

### 🔐 Acceso Completamente Oculto
- **Enlace Secreto**: No visible en la interfaz principal
- **Combinación de Teclas**: `Ctrl + Shift + P` para acceder
- **Protección por Login**: Requiere autenticación previa
- **Completamente Invisible**: No hay rastros en el código visible

### 📊 Dashboard Completo para Clientes
- **Resumen General**: Progreso del proyecto en tiempo real
- **Gestión de Tareas**: Lista interactiva con checkboxes
- **Actividades Recientes**: Feed de eventos del proyecto
- **Cronología**: Timeline del desarrollo del proyecto
- **💬 Chat en Tiempo Real**: Comunicación directa con el equipo WebMinds

### 🎯 Funcionalidades del Sistema

#### **1. Resumen del Proyecto**
- Progreso general con barra visual
- Estadísticas de tareas completadas
- Progreso por áreas (Frontend, Backend, UI/UX, Testing)
- Métricas en tiempo real

#### **2. Gestión de Tareas**
- Lista interactiva de tareas del proyecto
- Checkboxes para marcar completadas
- Estados: Pendiente, En Progreso, Completada
- Actualización automática de estadísticas

#### **3. Actividades Recientes**
- Feed de eventos del proyecto
- Iconos por tipo de actividad
- Timestamps de eventos
- Historial completo de cambios

#### **4. Cronología del Proyecto**
- Timeline visual del desarrollo
- Hitos importantes del proyecto
- Fechas de entrega y logros
- Progreso histórico

## Cómo Acceder al Sistema

### **Método 1: Combinación de Teclas**
1. Ve a la página principal (`index.html`)
2. Presiona `Ctrl + Shift + P`
3. Aparecerá un modal de acceso
4. Haz clic en "Acceder al Sistema"
5. Inicia sesión con credenciales válidas

### **Método 2: Enlace Directo**
1. Accede directamente a `proyecto.html`
2. El sistema verificará la autenticación
3. Si no estás logueado, te redirigirá al login

## Estructura del Sistema

### **Páginas**
- `proyecto.html` - Sistema principal de gestión de proyectos

### **Integración**
- Conectado con el sistema de autenticación existente
- Usa las mismas credenciales del sistema principal
- Protegido por el mismo sistema de sesiones

### **Datos del Proyecto**
- **Progreso General**: 75% completado
- **Tareas Totales**: 17 tareas
- **Tareas Completadas**: 12 tareas
- **En Progreso**: 3 tareas
- **Pendientes**: 2 tareas

## Áreas del Proyecto

### **Frontend (90% Completado)**
- Sistema de autenticación ✅
- Páginas principales ✅
- Sistema de niveles médicos ✅
- Diseño responsive ✅

### **Backend & API (60% Completado)**
- Configuración de base de datos 🔄
- APIs del sistema 🔄
- Integración con frontend 🔄

### **Diseño UI/UX (85% Completado)**
- Componentes principales ✅
- Sistema de colores ✅
- Iconografía ✅
- Optimizaciones pendientes 🔄

### **Testing & QA (40% Completado)**
- Pruebas unitarias 🔄
- Pruebas de integración 🔄
- Pruebas de seguridad ⏳

## Tareas del Proyecto

### **Completadas ✅**
1. Sistema de Autenticación
2. Diseño de Páginas Principales
3. Sistema de Niveles Médicos
4. Sistema de Gestión de Proyectos
5. Integración de Login
6. Diseño Responsive
7. Sistema de Notificaciones
8. Optimización de Código
9. Documentación Técnica
10. Configuración de Seguridad
11. Pruebas de Funcionalidad
12. Deploy Inicial

### **En Progreso 🔄**
1. Integración con Base de Datos
2. Sistema de Notificaciones Avanzado
3. Optimización de Rendimiento

### **Pendientes ⏳**
1. Pruebas de Seguridad
2. Auditoría Final
3. Deploy a Producción

## Actividades Recientes

### **Últimas 24 Horas**
- ✅ Tarea completada: Sistema de Niveles Médicos
- 🔄 Código actualizado: Integración de autenticación
- ⚠️ Bug reportado: Error en validación de formularios
- ➕ Nueva funcionalidad: Sistema de gestión de proyectos

### **Esta Semana**
- 👤 Usuario agregado: Nuevo miembro del equipo
- 🎨 Diseño actualizado: Nuevos componentes UI
- 🔧 Configuración actualizada: Variables de entorno
- 📝 Documentación actualizada: Manual de usuario

## Cronología del Proyecto

### **Diciembre 2024**
- **1 Dic**: Inicio del proyecto WebMinds
- **5 Dic**: Desarrollo frontend y autenticación
- **10 Dic**: Implementación de diseño UI/UX
- **15 Dic**: Sistema de niveles médicos
- **20 Dic**: Desarrollo backend y APIs
- **25 Dic**: Testing y corrección de errores
- **30 Dic**: Lanzamiento oficial (planificado)

## Seguridad

### **Características de Seguridad**
- ✅ Acceso solo para usuarios autenticados
- ✅ Enlace completamente oculto
- ✅ Protección por combinación de teclas
- ✅ Sesiones con expiración automática
- ✅ Sin rastros visibles en el código

### **Credenciales de Acceso**
Usa las mismas credenciales del sistema principal:
- `admin` / `admin123`
- `webminds` / `webminds2024`
- `soporte` / `soporte2024`
- `desarrollo` / `dev2024`

## Personalización

### **Agregar Nuevas Tareas**
Edita el HTML en `proyecto.html` en la sección de tareas:

```html
<div class="task-item">
  <div class="task-checkbox" onclick="toggleTask(this)"></div>
  <div class="task-content">
    <div class="task-title">Nueva Tarea</div>
    <div class="task-description">Descripción de la nueva tarea</div>
  </div>
  <div class="task-status status-pending">Pendiente</div>
</div>
```

### **Modificar Progreso**
Actualiza los valores en las secciones de estadísticas:

```javascript
// En la función updateProjectStats()
const totalTasks = 20; // Cambiar número total
const completedTasks = 15; // Cambiar completadas
```

### **Agregar Actividades**
Añade nuevas entradas en el feed de actividades:

```html
<div class="activity-item">
  <div class="activity-icon" style="background: #d1fae5; color: #065f46;">
    <i class="fa-solid fa-check"></i>
  </div>
  <div class="activity-content">
    <div class="activity-title">Nueva actividad</div>
    <div class="activity-time">Hace 1 hora</div>
  </div>
</div>
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive y animaciones
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **Sistema de Autenticación**: Integrado con WebMinds

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles

## Mantenimiento

### **Actualizaciones Regulares**
- Progreso del proyecto
- Nuevas tareas y actividades
- Estadísticas en tiempo real
- Cronología actualizada

### **Backup de Datos**
- Progreso guardado en localStorage
- Sincronización automática
- Recuperación de sesión

---

**Sistema de Gestión de Proyecto WebMinds** - Control total del desarrollo
