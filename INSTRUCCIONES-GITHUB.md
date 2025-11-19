# 📤 Instrucciones para Subir el Proyecto a GitHub

## Opción 1: Usar el Script Automático (Recomendado)

Ejecuta el script de PowerShell que he creado:

```powershell
.\git-push.ps1
```

Si te da error de permisos, ejecuta primero:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\git-push.ps1
```

---

## Opción 2: Comandos Manuales

Si prefieres ejecutar los comandos uno por uno, copia y pega estos comandos en tu terminal de PowerShell:

### Paso 1: Inicializar Git
```powershell
git init
```

### Paso 2: Agregar el repositorio remoto
```powershell
git remote add origin https://github.com/Noa0910/Webminds.git
```

### Paso 3: Agregar todos los archivos
```powershell
git add .
```

### Paso 4: Hacer el commit inicial
```powershell
git commit -m "Initial commit: Sistema completo WebMinds"
```

### Paso 5: Configurar la rama principal
```powershell
git branch -M main
```

### Paso 6: Subir al repositorio
```powershell
git push -u origin main
```

---

## ⚠️ IMPORTANTE

### Si ya tienes Git inicializado:

Si ves un error diciendo que ya existe un repositorio, salta el paso 1 y continúa desde el paso 2.

### Si el remote ya existe:

Si ya agregaste el remote anteriormente, primero elimínalo:
```powershell
git remote remove origin
```

Y luego agrégalo de nuevo (Paso 2).

### Autenticación de GitHub

Cuando ejecutes `git push`, GitHub te pedirá autenticación:

1. **Usuario**: Tu nombre de usuario de GitHub (Noa0910)
2. **Contraseña**: Tu Personal Access Token (PAT)

**No uses tu contraseña de GitHub**, debes usar un Personal Access Token.

#### Crear un Personal Access Token:

1. Ve a GitHub.com
2. Click en tu avatar → Settings
3. Developer settings → Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Selecciona los scopes: `repo` (todos)
6. Generate token
7. **COPIA el token** (no podrás verlo después)
8. Úsalo como contraseña cuando hagas push

---

## ✅ Verificar que se subió correctamente

Después de ejecutar los comandos, ve a:
**https://github.com/Noa0910/Webminds**

Deberías ver todos tus archivos en el repositorio.

---

## 📁 Archivos que se subirán:

✅ Todas las páginas HTML  
✅ Archivos CSS y JavaScript  
✅ Imágenes y recursos  
✅ README.md completo  
✅ Documentación del sistema  
✅ LICENSE  
✅ .gitignore  

**Total de archivos:** ~30 archivos

---

## 🆘 Solución de Problemas

### Error: "fatal: not a git repository"
**Solución:** Ejecuta `git init` primero

### Error: "remote origin already exists"
**Solución:** Ejecuta `git remote remove origin` y luego vuelve a agregar

### Error: "failed to push some refs"
**Solución:** Es probable que necesites hacer pull primero (aunque el repo está vacío, puede tener README o LICENSE):
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Error de autenticación
**Solución:** Asegúrate de usar un Personal Access Token en lugar de tu contraseña

---

## 🎉 ¡Listo!

Una vez subido, puedes:
- Ver tu proyecto en: https://github.com/Noa0910/Webminds
- Compartir el enlace con otros
- Configurar GitHub Pages para tener el sitio en vivo
- Colaborar con otros desarrolladores

---

**Desarrollado por WebMinds** 💙

