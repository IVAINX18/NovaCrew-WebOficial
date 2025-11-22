# NOVA CREW MYN1VERSE

Página web oficial de NOVA CREW MYN1VERSE - Un colectivo de bailarinas unidas por la pasión del K-Pop.

## Características

- Diseño moderno e interactivo con estética K-Pop inspirado en BTS
- Secciones completas: Home, Integrantes, Sub-Grupos, Galería, Sobre Nosotras y Contacto
- Diseño completamente responsivo (móvil, tablet y desktop)
- Efectos visuales con animaciones suaves y glow
- Formulario de contacto funcional
- Enlaces directos a redes sociales (Instagram y TikTok)

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión 16.0.0 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Visual Studio Code** - [Descargar aquí](https://code.visualstudio.com/)

Para verificar que están instalados, abre la terminal y ejecuta:
```bash
node --version
npm --version
```

## Instalación y Ejecución

### 1. Descargar el Proyecto

Tienes dos opciones:

**Opción A: Clonar desde Git**
```bash
git clone <tu-repositorio-url>
cd proyecto-nova-crew
```

**Opción B: Descargar como ZIP**
1. Haz clic en el botón "Code" en GitHub
2. Selecciona "Download ZIP"
3. Extrae el archivo descargado
4. Abre la carpeta en la terminal

### 2. Abrir en Visual Studio Code

```bash
code .
```

O usa el menú: `File > Open Folder` y selecciona la carpeta del proyecto.

### 3. Instalar las Dependencias

Abre la terminal integrada en VS Code (`Ctrl + ~` o `Terminal > New Terminal`) y ejecuta:

```bash
npm install
```

Esto descargará todas las librerías necesarias (puede tomar 1-2 minutos).

### 4. Ejecutar el Servidor de Desarrollo

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

Verás un mensaje similar a:
```
Local:        http://localhost:5173/
```

### 5. Abrir en el Navegador

Abre tu navegador favorito (Chrome, Firefox, Safari, Edge) y ve a:
```
http://localhost:5173/
```

¡La página debería cargar automáticamente con el diseño completo de NOVA CREW!

## Estructura del Proyecto

```
proyecto-nova-crew/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navegación principal
│   │   ├── Hero.tsx            # Sección Home con logo
│   │   ├── Members.tsx         # Sección de integrantes
│   │   ├── SubGroups.tsx       # Sub-grupos (Moon y Star)
│   │   ├── Gallery.tsx         # Galería de fotos y videos
│   │   ├── About.tsx           # Sobre nosotras
│   │   ├── Contact.tsx         # Formulario de contacto
│   │   └── Footer.tsx          # Pie de página
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Punto de entrada
│   └── index.css               # Estilos globales
├── public/
│   └── NovaCrewLogo.jpeg       # Logo oficial del grupo
├── package.json                # Dependencias del proyecto
├── tailwind.config.js          # Configuración de Tailwind CSS
├── vite.config.ts              # Configuración de Vite
└── README.md                   # Este archivo
```

## Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview

# Verificar errores de tipos
npm typecheck

# Validar código con ESLint
npm run lint
```

## Tecnologías Utilizadas

- **React 18** - Librería de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework CSS utilitario
- **Vite** - Herramienta de construcción rápida
- **Lucide React** - Iconos modernos
- **Poppins Font** - Tipografía redondeada y moderna

## Personalización

### Cambiar Colores

Los colores principales están en `tailwind.config.js`. Puedes modificarlos ajustando los valores de púrpura y rosa en los estilos Tailwind de cada componente.

### Agregar Integrantes

Edita `src/components/Members.tsx` y añade nuevos elementos al array `members`:

```typescript
{
  name: 'Nombre',
  role: 'Rol',
  description: 'Descripción',
  icon: IconoLucide,
}
```

### Cambiar Logo

Reemplaza `/public/NovaCrewLogo.jpeg` con tu nueva imagen. Asegúrate de que sea un archivo .jpeg o .png.

## Solución de Problemas

**Error: "npm: command not found"**
- Instala Node.js desde https://nodejs.org/

**El navegador muestra error "Connection refused"**
- Verifica que el servidor esté corriendo (`npm run dev`)
- Espera 5-10 segundos después de ejecutar el comando

**Los estilos no se ven correctamente**
- Borra la carpeta `node_modules` y ejecuta `npm install` nuevamente
- Borra el caché del navegador (`Ctrl + Shift + Del` o `Cmd + Shift + Del`)

**Errores de TypeScript**
- Ejecuta `npm typecheck` para ver los errores específicos
- Revisa que todos los imports sean correctos

## Publicar Online

Para publicar tu sitio en línea, puedes usar servicios como:
- **Netlify** - https://netlify.com
- **Vercel** - https://vercel.com
- **GitHub Pages** - https://pages.github.com

Solo necesitas ejecutar `npm run build` y subir la carpeta `dist/` generada.

## Licencia

Proyecto creado para NOVA CREW MYN1VERSE © 2024

## Contacto y Redes Sociales

- **Instagram**: [@n0va_crew](https://www.instagram.com/n0va_crew)
- **TikTok**: [@nova_crew_myn1ver](https://www.tiktok.com/@nova_crew_myn1ver)

---

¡Disfruta creando y compartiendo el universo de NOVA CREW! ✨
