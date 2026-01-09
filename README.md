# Chef Jon Arganaraz - Portfolio

> Portafolio web profesional para chef con experiencia en restaurantes Michelin y World's Best 50

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646cff.svg)](https://vitejs.dev/)

## 📖 Descripción

Portfolio web minimalista diseñado para mostrar la experiencia profesional, servicios y galería culinaria del chef Jon Arganaraz. El sitio presenta una navegación horizontal tipo carrusel con animaciones suaves y diseño totalmente responsive.

## ✨ Características

- **Diseño Minimalista**: Paleta de colores claros con predominio de blanco
- **Navegación Lateral**: Menú lateral con animaciones y sol argentino
- **Carrusel Horizontal**: Presentación fluida de secciones alternando contenido
- **Responsive**: Experiencia optimizada para móvil y escritorio
- **Internacionalización**: Soporte para español e inglés (i18n)
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Performance Optimizada**: Imágenes y videos servidos desde Cloudinary CDN

## 🎯 Secciones

### About Me
Presentación profesional del chef incluyendo:
- Experiencia en restaurantes Michelin y World's Best 50
- Trayectoria internacional (Argentina, Chile, Perú, España, Países Bajos)
- Filosofía culinaria y especialidades

### Services
Servicios profesionales ofrecidos:
- Pop Ups
- Chef Consultant
- Private Chef

### Gallery
Galería visual de alta calidad mostrando:
- Platos destacados con descripciones detalladas
- Chef en acción
- Video showcase

### Contact
Información de contacto y redes sociales:
- Email profesional
- Teléfono
- Instagram
- LinkedIn

## 🚀 Stack Tecnológico

### Core
- **React 19.1** - Framework UI
- **TypeScript 5.8** - Tipado estático
- **Vite 7.1** - Build tool y dev server

### Estilos y Animaciones
- **TailwindCSS 3.4** - Framework CSS utility-first
- **Framer Motion 12.23** - Animaciones fluidas
- **Custom Fonts**: Cormorant (headings) y Lora (body)

### Internacionalización
- **i18next 25.4** - Sistema de traducciones
- **react-i18next 15.7** - Integración con React

### Iconos
- **react-icons 5.5** - Librería de iconos

### Herramientas de Desarrollo
- **ESLint 9.33** - Linting
- **TypeScript ESLint 8.39** - Reglas TypeScript
- **PostCSS 8.4** - Procesamiento CSS

## 📁 Estructura del Proyecto

```
chef-experience-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Carousel.tsx        # Carrusel horizontal principal
│   │   │   ├── NavBar.tsx          # Navegación lateral
│   │   │   └── PairedSection.tsx   # Layout para desktop (2 columnas)
│   │   └── sections/
│   │       ├── About.tsx           # Sección sobre el chef
│   │       ├── Contact.tsx         # Información de contacto
│   │       ├── DescriptionAbout.tsx # Descripción detallada
│   │       ├── Footer.tsx          # Pie de página
│   │       ├── ImageDescription.tsx # Descripciones de platos
│   │       ├── ImgSection.tsx      # Sección de imágenes
│   │       ├── Services.tsx        # Servicios ofrecidos
│   │       └── VideoSection.tsx    # Sección de video
│   ├── hooks/
│   │   └── useMediaQuery.ts        # Hook para responsive design
│   ├── locales/
│   │   ├── en/
│   │   │   └── translation.json    # Traducciones inglés
│   │   └── es/
│   │       └── translation.json    # Traducciones español
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Entry point
│   ├── i18n.js                     # Configuración i18next
│   └── index.css                   # Estilos globales
├── public/
│   ├── sol.png                     # Sol argentino (optimizado)
│   └── Sol_favicon.svg             # Favicon
├── .github/
│   ├── workflows/                  # GitHub Actions CI/CD
│   └── ISSUE_TEMPLATE/             # Templates para issues
├── tailwind.config.js              # Configuración Tailwind
├── tsconfig.json                   # Configuración TypeScript
├── vite.config.ts                  # Configuración Vite
├── eslint.config.js                # Configuración ESLint
├── PROJECT.md                      # Especificaciones del proyecto
└── README.md                       # Este archivo
```

## 🛠️ Instalación y Uso

### Prerequisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/NahuelArg/chef-experience-portfolio.git

# Navegar al directorio
cd chef-experience-portfolio

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

El servidor se iniciará en `http://localhost:5173`

### Build para Producción

```bash
# Generar build optimizado
npm run build

# Preview del build
npm run preview
```

### Linting

```bash
# Ejecutar linter
npm run lint
```

## 🎨 Configuración de Diseño

### Paleta de Colores
- **Primario**: Blanco (#FFFFFF)
- **Acento**: Sol argentino (amarillo/dorado)
- **Texto**: Gris oscuro (#1F2937)
- **Secundario**: Gris claro (#F9FAFB)

### Tipografía
- **Headings**: Cormorant (serif elegante)
- **Body**: Lora (serif legible)

### Breakpoints Responsive
```javascript
// Mobile: < 768px
// Tablet: 768px - 1024px
// Desktop: > 1024px
```

## 🌐 Internacionalización

El proyecto soporta múltiples idiomas. Para agregar un nuevo idioma:

1. Crear archivo de traducción en `src/locales/[código]/translation.json`
2. Registrar el idioma en `src/i18n.js`
3. Actualizar el selector de idioma en `NavBar.tsx`

## 📸 Assets y CDN

Las imágenes y videos están alojados en Cloudinary para optimización automática y mejor performance:
- Compresión automática
- Responsive images
- Lazy loading
- CDN global

## 🚦 CI/CD

El proyecto incluye GitHub Actions para:
- **Build Test**: Verifica que el build se complete sin errores
- **Auto Assign**: Asigna automáticamente issues y PRs
- **Welcome**: Mensaje de bienvenida para nuevos contribuidores

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Nahuel Argañaraz**
- GitHub: [@NahuelArg](https://github.com/NahuelArg)

**Cliente: Chef Jon Argañaraz**
- Instagram: [@jon.arganaraz](https://www.instagram.com/jon.arganaraz)
- Email: Jon.arganaraz@gmail.com

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, revisa las guías de contribución antes de crear un Pull Request.

## 📞 Contacto

Para consultas sobre el proyecto, por favor abre un issue en GitHub o contacta directamente al desarrollador.

---

Desarrollado con ❤️ para la comunidad culinaria profesional
