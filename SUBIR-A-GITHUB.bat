@echo off
chcp 65001 >nul
echo ========================================
echo   SUBIENDO PROYECTO WEBMINDS A GITHUB
echo ========================================
echo.

REM Navegar al directorio del proyecto
cd /d "%~dp0"

echo [1/6] Eliminando .git anterior (si existe)...
if exist .git (
    rmdir /s /q .git
)

echo [2/6] Inicializando repositorio Git...
git init

echo [3/6] Agregando repositorio remoto...
git remote add origin https://github.com/Noa0910/Webminds.git

echo [4/6] Agregando todos los archivos...
git add .

echo [5/6] Creando commit inicial...
git commit -m "Initial commit: Sistema completo WebMinds con panel de administración, gestión de proyectos y sistema de usuarios"

echo [6/6] Configurando rama y subiendo a GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   ✓ PROYECTO SUBIDO EXITOSAMENTE!
echo ========================================
echo.
echo Ver en: https://github.com/Noa0910/Webminds
echo.
pause

