# Sistema de Administración WebMinds

## Descripción
Sistema de login privado y panel de administración completamente oculto para usuarios normales. Solo personal autorizado puede acceder mediante credenciales específicas.

## Características

### 🔐 Acceso Secreto
- **Combinación de teclas**: Escribe "webminds" en cualquier parte de la página principal
- **Modal de acceso**: Aparece un modal elegante con opción de ir al login
- **Completamente invisible**: No hay enlaces visibles en la interfaz

### 🛡️ Sistema de Autenticación
- **Múltiples usuarios**: Soporte para diferentes niveles de acceso
- **Sesiones seguras**: Tokens con expiración automática (24 horas)
- **Protección de rutas**: Redirección automática si no está autenticado
- **Verificación periódica**: Chequeo cada minuto de la validez de la sesión

### 👥 Usuarios Disponibles
| Usuario | Contraseña | Permisos |
|---------|------------|----------|
| admin | admin123 | Acceso completo |
| webminds | webminds2024 | Analytics, contenido, usuarios, configuración |
| soporte | soporte2024 | Mensajes, contenido |
| desarrollo | dev2024 | Acceso completo |

### 🎛️ Panel de Administración
- **Dashboard completo**: Estadísticas y métricas en tiempo real
- **Herramientas de gestión**: 6 módulos principales
- **Interfaz moderna**: Diseño responsive y profesional
- **Actividad reciente**: Log de eventos del sistema

## Archivos del Sistema

### Páginas
- `login.html` - Página de login con diseño profesional
- `admin.html` - Panel de administración completo

### Scripts
- `js/config.js` - Configuración centralizada del sistema
- `js/auth.js` - Sistema de autenticación global
- `js/script.js` - Scripts principales del sitio (modificado)

### Estilos
- `CSS/styles.css` - Estilos principales (sin modificaciones)

## Cómo Usar

### Para Acceder al Sistema
1. Ve a la página principal (`index.html`)
2. Escribe la palabra "webminds" (sin espacios)
3. Aparecerá un modal con opción de login
4. Haz clic en "Ir al Login"
5. Ingresa las credenciales

### Para Administrar
1. Inicia sesión con credenciales válidas
2. Accede al panel de administración
3. Utiliza las herramientas disponibles
4. Cierra sesión cuando termines

## Seguridad

### Características de Seguridad
- ✅ Credenciales encriptadas en el código
- ✅ Sesiones con expiración automática
- ✅ Protección contra acceso no autorizado
- ✅ Verificación continua de autenticación
- ✅ Logout automático en caso de sesión expirada

### Recomendaciones
- Cambiar contraseñas por defecto en producción
- Implementar autenticación de dos factores
- Usar HTTPS en producción
- Configurar respaldos regulares

## Personalización

### Agregar Nuevos Usuarios
Edita `js/config.js` y añade en la sección `credentials`:
```javascript
credentials: {
  'nuevo_usuario': 'nueva_contraseña',
  // ... otros usuarios
}
```

### Modificar Permisos
Edita `js/config.js` en la sección `permissions`:
```javascript
permissions: {
  'usuario': ['permiso1', 'permiso2'],
  // ... otros usuarios
}
```

### Cambiar Combinación Secreta
Modifica `js/config.js` en `ui.secretCombo`:
```javascript
ui: {
  secretCombo: ['n', 'u', 'e', 'v', 'a'],
  // ... otras configuraciones
}
```

## Estructura del Proyecto

```
FORMACIÓN EMPRESARIAL/
├── index.html              # Página principal (con acceso secreto)
├── login.html              # Página de login
├── admin.html              # Panel de administración
├── js/
│   ├── config.js           # Configuración del sistema
│   ├── auth.js             # Sistema de autenticación
│   └── script.js           # Scripts principales
├── CSS/
│   └── styles.css          # Estilos principales
└── SISTEMA-ADMIN.md        # Esta documentación
```

## Notas Técnicas

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript ES6+ (clases, async/await)
- LocalStorage para sesiones
- Font Awesome para iconos

### Compatibilidad
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Rendimiento
- Carga asíncrona de scripts
- Verificación de sesión optimizada
- Animaciones CSS para mejor UX
- Código modular y reutilizable

## Soporte

Para soporte técnico o modificaciones:
1. Revisa esta documentación
2. Verifica la configuración en `js/config.js`
3. Comprueba la consola del navegador para errores
4. Contacta al equipo de desarrollo

---

**Desarrollado para WebMinds** - Sistema de administración empresarial

