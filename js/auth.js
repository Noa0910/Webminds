// Sistema de autenticación global para WebMinds
class WebMindsAuth {
  constructor() {
    this.config = getConfig();
    this.sessionKey = this.config.session.key;
    this.validCredentials = this.config.credentials;
    this.init();
  }

  init() {
    // Crear enlace oculto en la página principal
    this.createHiddenAccess();
    
    // Proteger rutas administrativas
    this.protectAdminRoutes();
    
    // Configurar eventos globales
    this.setupGlobalEvents();
    
    // Cargar sistema de clientes si está habilitado
    this.loadClientSystem();
  }

  createHiddenAccess() {
    // Solo crear el enlace si estamos en la página principal
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
      this.addHiddenLoginLink();
    }
  }

  addHiddenLoginLink() {
    // Crear enlace oculto que solo aparece con combinación de teclas
    const hiddenLink = document.createElement('a');
    hiddenLink.href = 'login.html';
    hiddenLink.style.cssText = `
      position: fixed;
      top: -100px;
      left: -100px;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    `;
    hiddenLink.id = 'hidden-admin-access';
    hiddenLink.textContent = 'Acceso Administrativo';
    document.body.appendChild(hiddenLink);

    // Configurar combinación de teclas para mostrar enlace
    this.setupSecretKeyCombo();
  }

  setupSecretKeyCombo() {
    let keySequence = [];
    const secretCombo = this.config.ui.secretCombo;
    
    document.addEventListener('keydown', (e) => {
      // Solo activar si no estamos en un input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      keySequence.push(e.key.toLowerCase());
      
      // Mantener solo los últimos 8 caracteres
      if (keySequence.length > secretCombo.length) {
        keySequence = keySequence.slice(-secretCombo.length);
      }

      // Verificar si coincide con la secuencia secreta
      if (this.arraysEqual(keySequence, secretCombo)) {
        this.showSecretAccess();
        keySequence = []; // Reset
      }
    });

    // Agregar enlace secreto adicional para el sistema de proyectos
    this.addProjectSecretLink();
  }

  addProjectSecretLink() {
    // Crear enlace oculto para el sistema de proyectos
    const projectLink = document.createElement('a');
    projectLink.href = 'proyecto.html';
    projectLink.style.cssText = `
      position: fixed;
      top: -100px;
      left: -100px;
      width: 1px;
      height: 1px;
      opacity: 0;
      pointer-events: none;
      z-index: -1;
    `;
    projectLink.id = 'hidden-project-access';
    projectLink.textContent = 'Sistema de Gestión de Proyecto';
    document.body.appendChild(projectLink);

    // Configurar combinación de teclas para proyecto (Ctrl + Shift + P)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        this.showProjectAccess();
      }
    });
  }

  showProjectAccess() {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease-out;
    `;

    modal.innerHTML = `
      <div style="
        background: white;
        border-radius: 16px;
        padding: 2rem;
        text-align: center;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        animation: slideUp 0.3s ease-out;
      ">
        <div style="margin-bottom: 1.5rem;">
          <i class="fa-solid fa-project-diagram" style="font-size: 3rem; color: #2563eb; margin-bottom: 1rem;"></i>
          <h2 style="margin: 0 0 0.5rem 0; color: #1f2937; font-size: 1.5rem;">
            Mi Proyecto WebMinds
          </h2>
          <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
            Acceso al sistema de gestión de tu proyecto
          </p>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: center;">
          <button id="projectLoginBtn" style="
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
          ">
            <i class="fa-solid fa-sign-in-alt" style="margin-right: 0.5rem;"></i>
            Iniciar Sesión
          </button>
          <button id="closeProjectModal" style="
            background: #f3f4f6;
            color: #374151;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.2s;
          ">
            Cerrar
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('projectLoginBtn').addEventListener('click', () => {
      window.location.href = 'login.html';
    });

    document.getElementById('closeProjectModal').addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // Cerrar con Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        modal.remove();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  arraysEqual(a, b) {
    return a.length === b.length && a.every((val, i) => val === b[i]);
  }

  redirectToClientSystem() {
    // Redirigir según el rol del usuario
    const currentUser = this.getCurrentUser();
    const userRole = window.AUTH_CONFIG.userRoles[currentUser];
    
    if (userRole === 'administrador') {
      window.location.href = 'admin-panel.html';
    } else {
      window.location.href = 'proyecto.html';
    }
  }

  showSecretAccess() {
    // Crear modal de acceso secreto
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.3s ease-out;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: white;
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      animation: slideUp 0.3s ease-out;
    `;

    modalContent.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <i class="fa-solid fa-shield-halved" style="font-size: 3rem; color: #2563eb; margin-bottom: 1rem;"></i>
        <h2 style="margin: 0 0 0.5rem 0; color: #1f2937; font-size: 1.5rem;">Acceso Administrativo</h2>
        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">Has encontrado el acceso secreto al panel de administración</p>
      </div>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button id="secretLoginBtn" style="
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        ">
          <i class="fa-solid fa-sign-in-alt" style="margin-right: 0.5rem;"></i>
          Ir al Login
        </button>
        <button id="closeSecretModal" style="
          background: #f3f4f6;
          color: #374151;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        ">
          Cerrar
        </button>
      </div>
    `;

    // Añadir estilos de animación
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Event listeners
    document.getElementById('secretLoginBtn').addEventListener('click', () => {
      window.location.href = 'login.html';
    });

    document.getElementById('closeSecretModal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });

    // Cerrar con Escape
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        document.body.removeChild(modal);
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  protectAdminRoutes() {
    // Verificar si estamos en una ruta administrativa
    const adminRoutes = this.config.protectedRoutes;
    const currentPath = window.location.pathname;
    
    if (adminRoutes.some(route => currentPath.includes(route))) {
      if (currentPath.includes('admin.html') && !this.isAuthenticated()) {
        // Redirigir al login si no está autenticado
        window.location.href = 'login.html';
        return;
      }
    }
  }

  isAuthenticated() {
    const sessionData = localStorage.getItem(this.sessionKey);
    if (!sessionData) return false;

    try {
      const session = JSON.parse(sessionData);
      return Date.now() < session.expires;
    } catch {
      return false;
    }
  }

  setupGlobalEvents() {
    // Evento global para cerrar sesión
    window.addEventListener('storage', (e) => {
      if (e.key === this.sessionKey && !e.newValue) {
        // Sesión eliminada, redirigir al login
        if (window.location.pathname.includes('admin.html')) {
          window.location.href = 'login.html';
        }
      }
    });

    // Verificar sesión periódicamente
    setInterval(() => {
      if (window.location.pathname.includes('admin.html') && !this.isAuthenticated()) {
        window.location.href = 'login.html';
      }
    }, this.config.session.checkInterval);
  }

  // Método para logout global
  logout() {
    localStorage.removeItem(this.sessionKey);
    if (window.location.pathname.includes('admin.html')) {
      window.location.href = 'login.html';
    } else {
      window.location.href = 'index.html';
    }
  }

  // Método para verificar permisos
  hasPermission(permission) {
    if (!this.isAuthenticated()) return false;
    
    const sessionData = localStorage.getItem(this.sessionKey);
    if (!sessionData) return false;

    try {
      const session = JSON.parse(sessionData);
      // Aquí se pueden implementar diferentes niveles de permisos
      return session.username && this.validCredentials[session.username];
    } catch {
      return false;
    }
  }

  // Método para obtener información del usuario actual
  getCurrentUser() {
    const sessionData = localStorage.getItem(this.sessionKey);
    if (!sessionData) return null;

    try {
      const session = JSON.parse(sessionData);
      return session.username;
    } catch {
      return null;
    }
  }

  // Cargar sistema de clientes
  loadClientSystem() {
    if (this.config.clientSystem.enabled) {
      // El sistema de clientes se inicializará automáticamente
      // cuando se detecte un usuario autenticado
    }
  }

  // Método para obtener el tipo de cliente
  getClientType(username) {
    return this.config.clientTypes[username] || 'cliente';
  }
}

// Inicializar sistema de autenticación global
const webMindsAuth = new WebMindsAuth();

// Hacer disponible globalmente
window.webMindsAuth = webMindsAuth;

// Función de utilidad para mostrar notificaciones
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    animation: slideInRight 0.3s ease-out;
    max-width: 300px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  `;

  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6'
  };

  notification.style.background = colors[type] || colors.info;
  notification.textContent = message;

  // Añadir animación
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Auto-remove
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, duration);
}

// Hacer función de notificación disponible globalmente
window.showNotification = showNotification;
