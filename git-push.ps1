# Script para subir el proyecto WebMinds a GitHub
# Repositorio: https://github.com/Noa0910/Webminds.git

Write-Host "🚀 Iniciando proceso de subida a GitHub..." -ForegroundColor Cyan
Write-Host ""

# 1. Inicializar repositorio Git
Write-Host "📁 Inicializando repositorio Git..." -ForegroundColor Yellow
git init

# 2. Agregar remote origin
Write-Host "🔗 Conectando con GitHub..." -ForegroundColor Yellow
git remote add origin https://github.com/Noa0910/Webminds.git

# 3. Agregar todos los archivos
Write-Host "📝 Agregando archivos al staging..." -ForegroundColor Yellow
git add .

# 4. Hacer commit inicial
Write-Host "💾 Creando commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit: Sistema completo WebMinds con panel de administración, gestión de proyectos y sistema de usuarios"

# 5. Configurar rama principal
Write-Host "🌿 Configurando rama principal..." -ForegroundColor Yellow
git branch -M main

# 6. Subir al repositorio
Write-Host "⬆️  Subiendo archivos a GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ ¡Proyecto subido exitosamente a GitHub!" -ForegroundColor Green
Write-Host "🌐 Ver en: https://github.com/Noa0910/Webminds" -ForegroundColor Cyan

