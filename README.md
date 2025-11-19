# 🚀 WebMinds - Sistema de Gestión Empresarial

> Plataforma integral de gestión de proyectos, clientes y colaboración empresarial desarrollada por WebMinds.

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)]()

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Usuarios del Sistema](#-usuarios-del-sistema)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades Principales](#-funcionalidades-principales)
- [Seguridad](#-seguridad)
- [Roadmap](#-roadmap)
- [Soporte](#-soporte)

---

## 🎯 Descripción

**WebMinds** es un sistema completo de gestión empresarial que permite administrar proyectos, clientes, equipos y tareas de manera eficiente. Diseñado para agencias digitales, estudios de desarrollo y empresas de servicios tecnológicos.

### ¿Por qué WebMinds?

- ✅ **Interfaz intuitiva** - Diseño moderno y fácil de usar
- ✅ **Gestión completa** - Proyectos, tareas, usuarios y comunicación en un solo lugar
- ✅ **Multi-rol** - Sistema de permisos basado en roles
- ✅ **Sin servidor** - Funciona completamente en el navegador
- ✅ **Responsive** - Acceso desde cualquier dispositivo

---

## ✨ Características

### 🔐 Sistema de Autenticación
- Login seguro con validación de credenciales
- Sesiones persistentes (24 horas)
- Acceso secreto mediante combinación de teclas (`webminds`)
- Protección de rutas administrativas

### 👥 Gestión de Usuarios
- **Administradores** - Control total del sistema
- **Clientes** - Acceso a sus proyectos asignados
- **Equipo** - Gestión de tareas y proyectos
- **Soporte** - Asistencia y comunicación

### 📊 Panel de Administración
- Dashboard con estadísticas en tiempo real
- Gestión de proyectos (CRUD completo)
- Asignación de tareas a usuarios
- Sistema de seguimiento de progreso
- Visualización de métricas clave

### 💼 Sistema de Proyectos
- Visualización de proyectos asignados
- Seguimiento de tareas y progreso
- Estados: Planificación, En Progreso, Completado
- Timeline y fechas de entrega
- Descripción detallada de proyectos

### 💬 Comunicación
- Chat integrado por proyecto
- Mensajes entre clientes y administradores
- Notificaciones en tiempo real
- Historial de conversaciones

### 📈 Reportes y Estadísticas
- Total de proyectos activos
- Proyectos completados
- Tareas pendientes y completadas
- Progreso promedio general
- Métricas por usuario

---

## 🛠️ Tecnologías

### Frontend
```
HTML5          - Estructura semántica
CSS3           - Estilos modernos y responsive
JavaScript ES6 - Lógica de aplicación
```

### Librerías y Frameworks
```
Font Awesome 6.5.0  - Iconos
Google Fonts        - Tipografía (Inter)
LocalStorage API    - Persistencia de datos
```

### Arquitectura
```
SPA (Single Page Application)
Component-based Architecture
Local Storage Database
Responsive Design
```

---

## 📦 Instalación

### Prerequisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Python 3.x (para servidor local)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
```bash
git clone https://github.com/tuusuario/webminds.git
cd webminds
```

2. **Iniciar servidor local**
```bash
python -m http.server 8000
```

3. **Abrir en el navegador**
```
http://localhost:8000
```

### Instalación Alternativa (Sin Python)

Simplemente abrir `index.html` directamente en el navegador, aunque algunas funcionalidades pueden requerir un servidor local.

---

## 🚀 Uso

### Acceso al Sistema

#### 1. Desde la Página Principal
- Escribe la palabra secreta: **`webminds`**
- Aparecerá un modal de acceso
- Click en "Ir al Login"

#### 2. Acceso Rápido
- Presiona **`Ctrl + Shift + P`** en la página principal
- Accede al sistema de proyectos

#### 3. URL Directa
- Accede directamente a: `http://localhost:8000/login.html`

### Inicio de Sesión

Usa cualquiera de estas credenciales:

**Administrador:**
```
Usuario: admin
Contraseña: admin123
```

**Cliente de Prueba:**
```
Usuario: cliente1
Contraseña: cliente123
```

**Equipo WebMinds:**
```
Usuario: webminds
Contraseña: webminds2024
```

---

## 👥 Usuarios del Sistema

### Credenciales Completas

| Usuario | Contraseña | Rol | Permisos |
|---------|-----------|-----|----------|
| `admin` | `admin123` | Administrador | ✅ Control total del sistema |
| `cliente1` | `cliente123` | Cliente | 📂 Ver proyectos asignados |
| `cliente2` | `cliente456` | Cliente | 📂 Ver proyectos asignados |
| `cliente3` | `cliente789` | Cliente | 📂 Ver proyectos asignados |
| `webminds` | `webminds2024` | Equipo | 🔧 Gestión de proyectos y tareas |
| `soporte` | `soporte2024` | Soporte | 💬 Asistencia y comunicación |

### Permisos por Rol

#### 👑 Administrador
- Crear, editar y eliminar proyectos
- Asignar proyectos a clientes
- Gestionar usuarios
- Ver todas las estadísticas
- Acceso completo al panel de administración

#### 👤 Cliente
- Ver proyectos asignados
- Seguimiento de tareas
- Chat con administradores
- Ver progreso de proyectos

#### 👷 Equipo
- Ver todos los proyectos
- Actualizar estado de tareas
- Chat con clientes
- Reportar progreso

#### 🎧 Soporte
- Ver proyectos
- Chat con clientes
- Asistencia técnica

---

## 📁 Estructura del Proyecto

```
webminds/
│
├── index.html              # Página principal
├── login.html              # Sistema de autenticación
├── admin-panel.html        # Panel administrativo
├── proyecto.html           # Sistema de proyectos
├── admin.html              # Panel de administración alternativo
│
├── CSS/
│   └── styles.css          # Estilos globales
│
├── js/
│   ├── config.js           # Configuración y credenciales
│   ├── auth.js             # Sistema de autenticación
│   ├── projects.js         # Gestión de proyectos
│   └── script.js           # Scripts generales
│
├── images/
│   ├── favicon.svg         # Icono del sitio
│   ├── placeholder.svg     # Imágenes placeholder
│   └── site.webmanifest    # Manifest PWA
│
├── casos/
│   └── tienda-deportiva.html
│
├── blog.html               # Blog corporativo
├── servicios.html          # Página de servicios
├── equipo.html             # Equipo WebMinds
├── casos-exito.html        # Casos de éxito
├── contacto.html           # Formulario de contacto
├── solicitud-servicio.html # Solicitud de servicios
│
├── SISTEMA-ADMIN.md        # Documentación admin
├── SISTEMA-PROYECTO.md     # Documentación proyectos
└── README.md               # Este archivo
```

---

## 🎯 Funcionalidades Principales

### 1. Dashboard Administrativo

**Características:**
- Vista general de todos los proyectos
- Estadísticas en tiempo real
- Gráficos de progreso
- Lista de tareas pendientes
- Gestión de usuarios

**Estadísticas Disponibles:**
- Total de proyectos
- Proyectos completados
- Proyectos en progreso
- Total de tareas
- Tareas completadas
- Progreso promedio

### 2. Gestión de Proyectos

**Crear Proyecto:**
```javascript
{
  nombre: "Nombre del proyecto",
  cliente: "cliente1",
  descripcion: "Descripción detallada",
  fechaInicio: "2024-01-01",
  fechaFin: "2024-12-31",
  estado: "planificacion"
}
```

**Estados de Proyecto:**
- 🟡 **Planificación** - Proyecto en fase de diseño
- 🔵 **En Progreso** - Desarrollo activo
- 🟢 **Completado** - Proyecto finalizado

### 3. Sistema de Tareas

**Gestión de Tareas:**
- Crear nuevas tareas
- Asignar a usuarios específicos
- Marcar como completadas
- Seguimiento de progreso
- Fechas de entrega

### 4. Chat Integrado

**Funcionalidades:**
- Mensajes en tiempo real
- Organizado por proyecto
- Identificación de remitente
- Historial persistente
- Notificaciones visuales

---

## 🔒 Seguridad

### Características de Seguridad

1. **Autenticación Basada en Sesión**
   - Tokens almacenados en LocalStorage
   - Expiración automática (24 horas)
   - Verificación periódica de sesión

2. **Protección de Rutas**
   - Redirección automática si no autenticado
   - Verificación de permisos por rol
   - Acceso restringido a paneles administrativos

3. **Validación de Credenciales**
   - Contraseñas cifradas (en implementación)
   - Límite de intentos de login (configurado)
   - Bloqueo temporal tras intentos fallidos

4. **Acceso Secreto**
   - Combinación de teclas oculta
   - No visible en la interfaz pública
   - Protección contra acceso no autorizado

### Configuración de Seguridad

```javascript
security: {
  maxLoginAttempts: 5,           // Máximo de intentos
  lockoutDuration: 15 * 60 * 1000, // 15 minutos
  passwordMinLength: 6,          // Longitud mínima
  sessionDuration: 24 * 60 * 60 * 1000 // 24 horas
}
```

---

## 🗺️ Roadmap

### Versión 2.0 (Próximamente)

- [ ] Backend con Node.js y Express
- [ ] Base de datos MySQL/PostgreSQL
- [ ] API RESTful completa
- [ ] Autenticación JWT
- [ ] Notificaciones push
- [ ] Subida de archivos
- [ ] Exportación de reportes PDF
- [ ] Sistema de facturación
- [ ] Calendario integrado
- [ ] Videollamadas integradas

### Versión 1.5 (En desarrollo)

- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Tema oscuro
- [ ] Múltiples idiomas
- [ ] Notificaciones de escritorio
- [ ] Búsqueda avanzada
- [ ] Filtros de proyectos

---

## 📞 Soporte

### ¿Necesitas ayuda?

**Documentación:**
- [Sistema de Administración](SISTEMA-ADMIN.md)
- [Sistema de Proyectos](SISTEMA-PROYECTO.md)

**Contacto:**
- 📧 Email: soporte@webminds.com
- 🌐 Web: https://webminds.com
- 💬 Chat: Disponible en la plataforma

**Reportar Issues:**
- GitHub Issues: [github.com/webminds/issues](https://github.com)
- Tiempo de respuesta: 24-48 horas

---

## 📝 Notas Importantes

### Limitaciones Actuales

⚠️ **Este es un proyecto de demostración:**
- Los datos se almacenan en LocalStorage (no persistentes entre dispositivos)
- Las credenciales están en texto plano (solo para demo)
- No hay backend real
- No apto para producción sin modificaciones

### Recomendaciones para Producción

1. ✅ Implementar backend con autenticación real
2. ✅ Usar base de datos segura
3. ✅ Cifrar contraseñas con bcrypt
4. ✅ Implementar HTTPS
5. ✅ Validación del lado del servidor
6. ✅ Rate limiting para APIs
7. ✅ Backup automático de datos

---

## 🎨 Personalización

### Cambiar Colores

Edita `CSS/styles.css`:

```css
:root {
  --primary-color: #2563eb;    /* Azul principal */
  --secondary-color: #1d4ed8;  /* Azul secundario */
  --success-color: #10b981;    /* Verde éxito */
  --danger-color: #ef4444;     /* Rojo peligro */
}
```

### Agregar Usuarios

Edita `js/config.js`:

```javascript
credentials: {
  'nuevo_usuario': 'password123'
},
userRoles: {
  'nuevo_usuario': 'cliente'
}
```

### Modificar Duración de Sesión

En `js/config.js`:

```javascript
session: {
  duration: 24 * 60 * 60 * 1000  // Cambiar a lo deseado
}
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar WebMinds:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

## 👏 Créditos

**Desarrollado por:** WebMinds Team

**Tecnologías utilizadas:**
- Font Awesome (Iconos)
- Google Fonts (Tipografía)
- Inspiration from modern SaaS platforms

---

## 🌟 ¿Te gusta el proyecto?

Si encuentras útil este proyecto, ¡dale una ⭐ en GitHub!

---

<div align="center">

**Hecho con ❤️ por WebMinds**

[🌐 Sitio Web](https://webminds.com) • [📧 Email](mailto:info@webminds.com) • [💼 LinkedIn](https://linkedin.com)

</div>


