// Sistema de Gestión de Proyectos WebMinds
class ProjectManager {
  constructor() {
    this.projects = this.loadProjects();
    this.messages = this.loadMessages();
    this.init();
  }

  init() {
    // Inicializar proyectos de ejemplo si no existen
    if (Object.keys(this.projects).length === 0) {
      this.initializeSampleProjects();
    }
  }

  initializeSampleProjects() {
    this.projects = {
      'proj_001': {
        id: 'proj_001',
        name: 'Sitio Web Corporativo - Empresa ABC',
        client: 'cliente1',
        status: 'en_progreso',
        progress: 75,
        startDate: '2024-12-01',
        endDate: '2024-12-31',
        description: 'Desarrollo de sitio web corporativo con e-commerce integrado',
        tasks: [
          { id: 'task_001', name: 'Diseño de interfaz', completed: true, assignedTo: 'admin' },
          { id: 'task_002', name: 'Desarrollo frontend', completed: true, assignedTo: 'webminds' },
          { id: 'task_003', name: 'Integración de backend', completed: false, assignedTo: 'webminds' },
          { id: 'task_004', name: 'Pruebas de funcionalidad', completed: false, assignedTo: 'soporte' },
          { id: 'task_005', name: 'Deploy a producción', completed: false, assignedTo: 'admin' }
        ],
        createdBy: 'admin',
        createdAt: new Date().toISOString()
      },
      'proj_002': {
        id: 'proj_002',
        name: 'App Móvil - Startup XYZ',
        client: 'cliente2',
        status: 'planificacion',
        progress: 25,
        startDate: '2024-12-15',
        endDate: '2025-02-15',
        description: 'Aplicación móvil nativa para iOS y Android',
        tasks: [
          { id: 'task_006', name: 'Análisis de requerimientos', completed: true, assignedTo: 'admin' },
          { id: 'task_007', name: 'Diseño de UX/UI', completed: false, assignedTo: 'webminds' },
          { id: 'task_008', name: 'Desarrollo iOS', completed: false, assignedTo: 'webminds' },
          { id: 'task_009', name: 'Desarrollo Android', completed: false, assignedTo: 'webminds' },
          { id: 'task_010', name: 'Testing y QA', completed: false, assignedTo: 'soporte' }
        ],
        createdBy: 'admin',
        createdAt: new Date().toISOString()
      },
      'proj_003': {
        id: 'proj_003',
        name: 'Sistema de Inventario - Tienda Local',
        client: 'cliente3',
        status: 'completado',
        progress: 100,
        startDate: '2024-11-01',
        endDate: '2024-11-30',
        description: 'Sistema de gestión de inventario con reportes',
        tasks: [
          { id: 'task_011', name: 'Análisis del negocio', completed: true, assignedTo: 'admin' },
          { id: 'task_012', name: 'Desarrollo del sistema', completed: true, assignedTo: 'webminds' },
          { id: 'task_013', name: 'Implementación', completed: true, assignedTo: 'admin' },
          { id: 'task_014', name: 'Capacitación del cliente', completed: true, assignedTo: 'soporte' }
        ],
        createdBy: 'admin',
        createdAt: new Date().toISOString()
      }
    };
    this.saveProjects();
  }

  // Obtener proyectos por usuario
  getProjectsForUser(username) {
    const userRole = window.AUTH_CONFIG.userRoles[username];
    
    if (userRole === 'administrador') {
      return Object.values(this.projects);
    } else if (userRole === 'cliente') {
      return Object.values(this.projects).filter(project => project.client === username);
    } else {
      // Para equipo y soporte, mostrar todos los proyectos
      return Object.values(this.projects);
    }
  }

  // Crear nuevo proyecto
  createProject(projectData) {
    const projectId = 'proj_' + Date.now();
    const project = {
      id: projectId,
      name: projectData.name,
      client: projectData.client,
      status: 'planificacion',
      progress: 0,
      startDate: projectData.startDate,
      endDate: projectData.endDate,
      description: projectData.description,
      tasks: [],
      createdBy: projectData.createdBy,
      createdAt: new Date().toISOString()
    };
    
    this.projects[projectId] = project;
    this.saveProjects();
    return project;
  }

  // Actualizar proyecto
  updateProject(projectId, updates) {
    if (this.projects[projectId]) {
      this.projects[projectId] = { ...this.projects[projectId], ...updates };
      this.saveProjects();
      return this.projects[projectId];
    }
    return null;
  }

  // Agregar tarea a proyecto
  addTaskToProject(projectId, taskData) {
    if (this.projects[projectId]) {
      const taskId = 'task_' + Date.now();
      const task = {
        id: taskId,
        name: taskData.name,
        completed: false,
        assignedTo: taskData.assignedTo,
        ...taskData
      };
      
      this.projects[projectId].tasks.push(task);
      this.updateProjectProgress(projectId);
      this.saveProjects();
      return task;
    }
    return null;
  }

  // Actualizar progreso del proyecto
  updateProjectProgress(projectId) {
    if (this.projects[projectId]) {
      const project = this.projects[projectId];
      const totalTasks = project.tasks.length;
      const completedTasks = project.tasks.filter(task => task.completed).length;
      
      if (totalTasks > 0) {
        project.progress = Math.round((completedTasks / totalTasks) * 100);
        
        // Actualizar estado basado en progreso
        if (project.progress === 100) {
          project.status = 'completado';
        } else if (project.progress > 0) {
          project.status = 'en_progreso';
        }
      }
      
      this.saveProjects();
    }
  }

  // Marcar tarea como completada
  toggleTask(projectId, taskId) {
    if (this.projects[projectId]) {
      const task = this.projects[projectId].tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
        this.updateProjectProgress(projectId);
        this.saveProjects();
        return task;
      }
    }
    return null;
  }

  // Obtener mensajes de chat
  getMessages(projectId) {
    return this.messages[projectId] || [];
  }

  // Enviar mensaje
  sendMessage(projectId, messageData) {
    if (!this.messages[projectId]) {
      this.messages[projectId] = [];
    }
    
    const message = {
      id: 'msg_' + Date.now(),
      projectId: projectId,
      sender: messageData.sender,
      message: messageData.message,
      timestamp: new Date().toISOString(),
      type: messageData.type || 'text'
    };
    
    this.messages[projectId].push(message);
    this.saveMessages();
    return message;
  }

  // Obtener estadísticas
  getStats() {
    const allProjects = Object.values(this.projects);
    const totalProjects = allProjects.length;
    const completedProjects = allProjects.filter(p => p.status === 'completado').length;
    const inProgressProjects = allProjects.filter(p => p.status === 'en_progreso').length;
    const plannedProjects = allProjects.filter(p => p.status === 'planificacion').length;
    
    const totalTasks = allProjects.reduce((sum, p) => sum + p.tasks.length, 0);
    const completedTasks = allProjects.reduce((sum, p) => 
      sum + p.tasks.filter(t => t.completed).length, 0);
    
    return {
      totalProjects,
      completedProjects,
      inProgressProjects,
      plannedProjects,
      totalTasks,
      completedTasks,
      averageProgress: totalProjects > 0 ? 
        Math.round(allProjects.reduce((sum, p) => sum + p.progress, 0) / totalProjects) : 0
    };
  }

  // Guardar proyectos
  saveProjects() {
    localStorage.setItem('webminds_projects', JSON.stringify(this.projects));
  }

  // Cargar proyectos
  loadProjects() {
    const saved = localStorage.getItem('webminds_projects');
    return saved ? JSON.parse(saved) : {};
  }

  // Guardar mensajes
  saveMessages() {
    localStorage.setItem('webminds_messages', JSON.stringify(this.messages));
  }

  // Cargar mensajes
  loadMessages() {
    const saved = localStorage.getItem('webminds_messages');
    return saved ? JSON.parse(saved) : {};
  }

  // Obtener usuarios disponibles
  getUsers() {
    return Object.keys(window.AUTH_CONFIG.userRoles).map(username => ({
      username,
      role: window.AUTH_CONFIG.userRoles[username],
      displayName: this.getDisplayName(username)
    }));
  }

  getDisplayName(username) {
    const names = {
      'admin': 'Administrador',
      'cliente1': 'Cliente 1',
      'cliente2': 'Cliente 2', 
      'cliente3': 'Cliente 3',
      'webminds': 'Equipo WebMinds',
      'soporte': 'Soporte Técnico'
    };
    return names[username] || username;
  }
}

// Inicializar gestor de proyectos
const projectManager = new ProjectManager();

// Hacer disponible globalmente
window.projectManager = projectManager;



