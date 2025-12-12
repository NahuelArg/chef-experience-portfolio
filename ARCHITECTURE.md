# Arquitectura del Proyecto

Este documento describe la arquitectura técnica, patrones de diseño y decisiones de implementación del Chef Jon Arganaraz Portfolio.

## 📐 Visión General

El proyecto es una Single Page Application (SPA) construida con React que implementa un sistema de navegación tipo carrusel horizontal con diseño responsive adaptativo.

## 🏗️ Arquitectura de Componentes

### Jerarquía de Componentes

```
App.tsx (Root)
├── NavBar (Layout)
│   ├── Menu Toggle Button
│   ├── Language Selector
│   └── Argentine Sun Logo
├── HorizontalScroll (Layout)
│   └── Sections (Content)
│       ├── Desktop Layout
│       │   ├── PairedSection
│       │   │   ├── About + Services
│       │   │   ├── ImgSection + ImageDescription (x3)
│       │   │   └── DescriptionAbout + Contact
│       │   └── VideoSection
│       └── Mobile Layout (11 slides individuales)
└── Footer (Layout)
```

## 🎯 Patrones de Diseño

### 1. Component Composition Pattern

El proyecto usa composición para crear layouts flexibles:

```tsx
// PairedSection: Componente contenedor reutilizable
<PairedSection
  left={<About />}
  right={<Services />}
  leftWidth="60%"
  rightWidth="40%"
/>
```

**Ventajas:**
- Reutilización de lógica de layout
- Separación de preocupaciones
- Fácil mantenimiento

### 2. Custom Hooks Pattern

```tsx
// useMediaQuery.ts: Hook personalizado para responsive
const isDesktop = useIsDesktop(); // 1024px breakpoint

// useTranslation: Hook de i18next
const { t, i18n } = useTranslation();
```

**Ventajas:**
- Lógica reutilizable
- Separación de UI y lógica de negocio
- Testing más sencillo

### 3. Render Props Pattern (implícito)

El componente `HorizontalScroll` acepta children dinámicos:

```tsx
<HorizontalScroll activeIndex={activeSlide} setActiveIndex={setActiveSlide}>
  {sections.map((item, idx) => (
    <section key={idx}>{item.component}</section>
  ))}
</HorizontalScroll>
```

## 🔄 Flujo de Datos

### Estado Global vs Local

El proyecto NO usa gestión de estado global (Redux, Zustand, etc.) intencionalmente:

```
App.tsx (Estado)
├── activeSlide: number          → Sección actual del carrusel
└── isDesktop: boolean            → Breakpoint responsive
    ↓
    Props drilling a componentes hijos
```

**Justificación:**
- Aplicación pequeña con estado simple
- Evita complejidad innecesaria
- Mejor performance (menos re-renders)

### Flujo de Navegación

```
User Action (scroll/click/keyboard)
    ↓
Carousel.tsx (handleScroll/handleWheel/handleKeyDown)
    ↓
setActiveIndex(newIndex)
    ↓
App.tsx (activeSlide actualizado)
    ↓
Re-render con smooth scroll
```

## 🎨 Sistema de Diseño

### Responsive Strategy

El proyecto usa dos estrategias diferentes según el viewport:

#### Mobile (< 1024px)
- **11 slides individuales**
- Scroll horizontal libre
- Una sección por vista

#### Desktop (≥ 1024px)
- **6 slides con contenido pareado**
- Layouts de 2 columnas
- Mejor aprovechamiento del espacio

```tsx
// App.tsx: Lógica de switch
const sections = isDesktop ? desktopSections : mobileSections;

// useEffect: Reset al cambiar breakpoint
useEffect(() => {
  setActiveSlide(0);
}, [isDesktop]);
```

### Tailwind Configuration

```javascript
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      heading: ['Cormorant', 'serif'],
      body: ['Lora', 'serif'],
    },
  },
}
```

## 🌐 Internacionalización (i18n)

### Arquitectura i18n

```
i18n.js (Config)
    ↓
i18next.init()
    ├── resources
    │   ├── en/translation.json
    │   └── es/translation.json
    └── lng: "en" (default)
        ↓
    Components usan useTranslation()
        ↓
    t("clave") → texto traducido
```

### Estructura de Traducciones

```json
{
  "About": "Sobre Mí",
  "service1": "POP UPS",
  "p1": "Comencé a cocinar a los 17 años...",
  "img1_desc": "Bacalao cocinado al vacío..."
}
```

**Buenas prácticas:**
- Keys en inglés para consistencia
- Textos descriptivos, no técnicos
- Mantener sincronizados es/en

## 🎬 Sistema de Animaciones

### Framer Motion Strategy

```tsx
// NavBar.tsx: Animaciones declarativas
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Contenido */}
</motion.div>

// Animación del sol argentino
<motion.img
  animate={{
    filter: [
      "drop-shadow(0 0 15px rgba(234, 179, 8, 0.5))",
      "drop-shadow(0 0 8px rgba(234, 179, 8, 0.3))",
      "drop-shadow(0 0 15px rgba(234, 179, 8, 0.5))",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
```

### Performance Optimization

- Animaciones con GPU (`transform`, `opacity`)
- `will-change` para elementos animados
- Debouncing en scroll events (150ms)

## 🖼️ Asset Management

### Cloudinary CDN Strategy

Todas las imágenes y videos se sirven desde Cloudinary:

```tsx
// App.tsx: URLs de Cloudinary
const img1 = "https://res.cloudinary.com/dyiiztnx4/image/upload/v1763735236/IMG_4250_jlx4wl.jpg";
const video = "https://res.cloudinary.com/dyiiztnx4/video/upload/v1763735240/IMG_4492_1_gkjl9s.mp4";
```

**Ventajas:**
- Optimización automática de imágenes
- Responsive images con transformaciones
- CDN global (baja latencia)
- Reducción de tamaño del repositorio

### Assets Locales

Solo assets críticos/pequeños:
- `sol.png` (149KB) - Logo argentino
- `Sol_favicon.svg` - Favicon vectorial

## 🎯 Carrusel Horizontal (Core Feature)

### Implementación Técnica

```tsx
// Carousel.tsx: Sistema de scroll customizado
const handleWheel = (e: WheelEvent) => {
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

  e.preventDefault();
  const smoothFactor = 0.6; // Scroll suave
  container.scrollLeft += e.deltaY * smoothFactor;
};

// Navegación con teclado
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    e.preventDefault();
    container.scrollBy({
      left: e.key === "ArrowLeft" ? -container.clientWidth : container.clientWidth,
      behavior: 'smooth'
    });
  }
};
```

### Features del Carrusel

1. **Scroll Wheel → Horizontal**
   - Convierte scroll vertical a horizontal
   - Factor de suavizado: 0.6x

2. **Keyboard Navigation**
   - Arrow Left/Right
   - Smooth scroll entre secciones

3. **Touch/Swipe Support**
   - CSS: `overflow-x: auto`
   - `-webkit-overflow-scrolling: touch`

4. **Navigation Buttons (Desktop)**
   - Botones prev/next en los bordes
   - Solo visible en desktop (`hidden md:block`)

5. **Snap Points (Implícito)**
   - Cada sección ocupa 100% del viewport width
   - Debounce para detectar sección activa (150ms)

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
< 768px   → Mobile
768-1023px → Tablet (trata como mobile)
≥ 1024px  → Desktop
```

### Media Query Hook

```typescript
// useMediaQuery.ts
export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktop;
};
```

### Tailwind Responsive Utilities

```tsx
// Ejemplo de uso en componentes
<div className="px-4 md:px-8 lg:px-16">  // Padding responsive
<div className="hidden md:block">         // Ocultar en mobile
<div className="text-sm md:text-base">   // Texto responsive
```

## 🔧 Build y Optimización

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  // Vite maneja automáticamente:
  // - Code splitting
  // - Tree shaking
  // - Minificación
  // - Asset optimization
});
```

### Build Output

```bash
npm run build

dist/
├── assets/
│   ├── index-[hash].js    # Bundle principal
│   ├── index-[hash].css   # Estilos compilados
│   └── sol-[hash].png     # Assets optimizados
└── index.html             # Entry point
```

### Performance Optimizations

1. **Code Splitting**
   - Vite automáticamente splitea chunks
   - Lazy loading de componentes (si se implementa)

2. **Asset Optimization**
   - Imágenes desde CDN (Cloudinary)
   - SVGs inline cuando son pequeños

3. **CSS Optimization**
   - TailwindCSS purge automático
   - PostCSS minificación

4. **TypeScript Compilation**
   - Transpilación a ES6+ (moderno)
   - Source maps para debugging

## 🧪 Testing Strategy (Futuro)

### Recomendaciones para Testing

```typescript
// Unit Tests - Vitest
describe('useMediaQuery', () => {
  it('should return true for desktop width', () => {
    // Test implementation
  });
});

// Component Tests - React Testing Library
describe('NavBar', () => {
  it('should open menu on button click', () => {
    // Test implementation
  });
});

// E2E Tests - Playwright
test('user can navigate through carousel', async ({ page }) => {
  // Test implementation
});
```

## 🔐 Security Considerations

### Current Security Measures

1. **Dependencies**
   - Uso de paquetes populares y mantenidos
   - Auditoría con `npm audit`

2. **External Links**
   - `rel="noopener noreferrer"` en todos los links externos
   - Prevención de tabnabbing

3. **No User Input**
   - Sin formularios ni inputs de usuario
   - Sin necesidad de sanitización

4. **Environment Variables**
   - No secrets en el código
   - Variables de entorno para APIs (si se agregan)

## 🚀 Deployment

### Build para Producción

```bash
npm run build
# Genera dist/ listo para deploy
```

### Plataformas Recomendadas

- **Vercel**: Configuración zero
- **Netlify**: Deploy automático
- **GitHub Pages**: Hosting gratuito
- **Cloudflare Pages**: CDN integrado

### Configuración de Deploy

```json
{
  "build": {
    "command": "npm run build",
    "publish": "dist"
  }
}
```

## 📊 Performance Metrics

### Target Metrics (Lighthouse)

- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 90

### Optimizaciones Aplicadas

- Imágenes optimizadas (Cloudinary)
- Fonts preconnect
- CSS critical inline
- Async JavaScript loading

## 🔮 Arquitectura Futura

### Posibles Mejoras

1. **State Management**
   - Zustand para estado más complejo (si crece)

2. **Testing**
   - Vitest para unit tests
   - Playwright para E2E

3. **CMS Integration**
   - Sanity.io para gestión de contenido
   - Cliente puede actualizar galería sin código

4. **Analytics**
   - Google Analytics / Plausible
   - Tracking de navegación y engagement

5. **SEO**
   - Meta tags dinámicos
   - Open Graph para redes sociales
   - Schema.org markup

## 📚 Referencias Técnicas

- [React 19 Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [i18next Documentation](https://www.i18next.com/)

---

Última actualización: 2025-12-12
