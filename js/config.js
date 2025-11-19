// Configuración del sistema de autenticación WebMinds
const AUTH_CONFIG = {
  // Credenciales válidas (en producción, esto debería estar en el servidor)
  credentials: {
    'admin': 'admin123',
    'cliente1': 'cliente123',
    'cliente2': 'cliente456',
    'cliente3': 'cliente789',
    'webminds': 'webminds2024',
    'soporte': 'soporte2024'
  },

  // Configuración de sesión
  session: {
    key: 'webminds_admin_session',
    duration: 24 * 60 * 60 * 1000, // 24 horas en milisegundos
    checkInterval: 60000 // Verificar cada minuto
  },

  // Rutas protegidas
  protectedRoutes: [
    'admin.html',
    'login.html'
  ],

  // Configuración de la interfaz
  ui: {
    secretCombo: ['w', 'e', 'b', 'm', 'i', 'n', 'd', 's'],
    notificationDuration: 3000,
    modalAnimationDuration: 300
  },

  // Configuración de seguridad
  security: {
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutos
    passwordMinLength: 6
  },

  // Roles y permisos por usuario
  userRoles: {
    'admin': 'administrador',
    'cliente1': 'cliente',
    'cliente2': 'cliente', 
    'cliente3': 'cliente',
    'webminds': 'equipo',
    'soporte': 'soporte'
  },

  // Permisos por rol
  permissions: {
    'administrador': ['all', 'create_projects', 'assign_projects', 'manage_users', 'view_all_projects'],
    'cliente': ['view_assigned_projects', 'chat_with_admin', 'view_tasks'],
    'equipo': ['view_projects', 'update_tasks', 'chat_with_clients'],
    'soporte': ['view_projects', 'chat_with_clients']
  },

  // Configuración del sistema de clientes
  clientSystem: {
    enabled: true,
    chatEnabled: true,
    projectTracking: true,
    notifications: true
  },

  // Configuración de notificaciones
  notifications: {
    success: {
      color: '#10b981',
      icon: 'fa-check-circle'
    },
    error: {
      color: '#ef4444',
      icon: 'fa-exclamation-circle'
    },
    warning: {
      color: '#f59e0b',
      icon: 'fa-exclamation-triangle'
    },
    info: {
      color: '#3b82f6',
      icon: 'fa-info-circle'
    }
  }
};

// Función para obtener configuración
function getConfig() {
  return AUTH_CONFIG;
}

// Función para validar credenciales
function validateCredentials(username, password) {
  return AUTH_CONFIG.credentials[username] === password;
}

// Función para verificar permisos
function hasPermission(username, permission) {
  const userPermissions = AUTH_CONFIG.permissions[username] || [];
  return userPermissions.includes('all') || userPermissions.includes(permission);
}

// Función para obtener configuración de notificación
function getNotificationConfig(type) {
  return AUTH_CONFIG.notifications[type] || AUTH_CONFIG.notifications.info;
}

// Hacer configuración disponible globalmente
window.AUTH_CONFIG = AUTH_CONFIG;
window.getConfig = getConfig;
window.validateCredentials = validateCredentials;
window.hasPermission = hasPermission;
window.getNotificationConfig = getNotificationConfig;
