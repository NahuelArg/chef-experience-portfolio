# Guía de Contribución

Gracias por considerar contribuir al Chef Jon Arganaraz Portfolio. Este documento proporciona pautas para contribuir al proyecto.

## 📋 Código de Conducta

Este proyecto se adhiere a un código de conducta profesional. Al participar, se espera que mantengas un ambiente respetuoso y constructivo.

## 🚀 Cómo Contribuir

### Reportar Bugs

Si encuentras un bug, por favor crea un issue incluyendo:

- **Descripción clara** del problema
- **Pasos para reproducir** el bug
- **Comportamiento esperado** vs comportamiento actual
- **Screenshots** si es aplicable
- **Entorno**: Navegador, versión, sistema operativo

### Sugerir Mejoras

Para sugerir nuevas características:

1. Verifica que no exista un issue similar
2. Crea un issue con el tag `enhancement`
3. Describe claramente la funcionalidad propuesta
4. Explica por qué sería útil para el proyecto

### Pull Requests

#### Antes de Enviar un PR

1. **Fork** el repositorio
2. Crea una **rama** desde `main`:
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   ```
3. Asegúrate de que tu código:
   - Siga las guías de estilo del proyecto
   - Pase el linter (`npm run lint`)
   - Compile sin errores (`npm run build`)

#### Proceso de PR

1. **Commit** tus cambios con mensajes descriptivos:
   ```bash
   git commit -m "feat: agregar funcionalidad X"
   ```

2. **Push** a tu fork:
   ```bash
   git push origin feature/mi-nueva-caracteristica
   ```

3. Abre un **Pull Request** en GitHub

4. Completa la plantilla de PR con:
   - Descripción de los cambios
   - Issue relacionado (si aplica)
   - Screenshots (si hay cambios visuales)
   - Checklist de verificación

#### Revisión de Código

- Los PRs requieren al menos una aprobación
- Se puede solicitar cambios antes de hacer merge
- Responde a los comentarios de revisión
- Una vez aprobado, el maintainer hará el merge

## 📝 Guías de Estilo

### Código TypeScript/React

```typescript
// ✅ Correcto: Componentes con tipos explícitos
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

// ❌ Incorrecto: Sin tipos
const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Convenciones de Nombres

- **Componentes**: PascalCase (`NavBar.tsx`, `Contact.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useMediaQuery.ts`)
- **Utilidades**: camelCase (`formatDate.ts`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`)

### Estructura de Archivos

```
src/components/
├── layout/          # Componentes de layout
│   ├── NavBar.tsx
│   └── Carousel.tsx
└── sections/        # Secciones de contenido
    ├── About.tsx
    └── Contact.tsx
```

### CSS/Tailwind

- Usa clases de Tailwind cuando sea posible
- Para estilos complejos, considera crear componentes reutilizables
- Mantén la consistencia con el sistema de diseño existente

```tsx
// ✅ Correcto: Tailwind con responsive
<div className="px-4 md:px-8 lg:px-16">

// ❌ Incorrecto: Estilos inline
<div style={{ padding: '16px' }}>
```

### Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: agregar nueva funcionalidad
fix: corregir bug en navegación
docs: actualizar README
style: formatear código
refactor: reestructurar componente
test: agregar tests
chore: actualizar dependencias
```

## 🧪 Testing

Actualmente el proyecto no tiene tests configurados. Se agradecen PRs que agreguen:

- Unit tests con Vitest
- Integration tests
- E2E tests con Playwright/Cypress

## 🔍 Proceso de Revisión

### Checklist del Revisor

- [ ] El código sigue las guías de estilo
- [ ] Los cambios están bien documentados
- [ ] No hay conflictos con `main`
- [ ] El build pasa sin errores
- [ ] El linter no reporta errores
- [ ] Los cambios visuales se ven bien en móvil y desktop

### Tiempo de Respuesta

- Issues: 2-3 días hábiles
- Pull Requests: 3-5 días hábiles
- Bug críticos: 24 horas

## 🌐 Internacionalización

Al agregar nuevo texto visible:

1. **NO** uses texto hardcoded
2. Agrega las traducciones en:
   - `src/locales/es/translation.json`
   - `src/locales/en/translation.json`
3. Usa el hook `useTranslation()`:

```tsx
const { t } = useTranslation();
return <h1>{t("titulo_clave")}</h1>;
```

## 📸 Assets

### Imágenes

- Usa Cloudinary para imágenes del portfolio
- Optimiza imágenes antes de subirlas
- Usa formatos modernos (WebP, AVIF) cuando sea posible
- Siempre incluye `alt` text descriptivo

### SVGs

- Prefiere SVGs para iconos y gráficos
- Optimiza SVGs con SVGO
- Considera usar `react-icons` antes de agregar nuevos SVGs

## 🐛 Debugging

### Herramientas Útiles

```bash
# Ver errores de TypeScript
npm run build

# Ejecutar linter
npm run lint

# Analizar bundle
npm run build -- --mode=production
```

### Logs

- Usa `console.error()` para errores
- Usa `console.warn()` para warnings
- Elimina `console.log()` antes de hacer commit

## 📦 Dependencias

### Agregar Nuevas Dependencias

Antes de agregar una nueva dependencia:

1. Verifica si ya existe funcionalidad similar
2. Considera el tamaño del bundle
3. Verifica que esté activamente mantenida
4. Discútelo en un issue primero

```bash
# Para dependencias de runtime
npm install nombre-paquete

# Para dependencias de desarrollo
npm install -D nombre-paquete
```

## 🎨 Diseño

Mantén la consistencia con:

- **Paleta de colores**: Blanco, gris claro, sol argentino
- **Tipografía**: Cormorant (headings), Lora (body)
- **Espaciado**: Usa el sistema de spacing de Tailwind
- **Animaciones**: Sutiles y con propósito

## 📞 Contacto

¿Preguntas sobre contribuciones?

- Abre un **Discussion** en GitHub
- Comenta en el **Issue** relevante
- Contacta al maintainer: [@NahuelArg](https://github.com/NahuelArg)

## 🙏 Reconocimientos

Todos los contribuidores serán reconocidos en el proyecto. ¡Gracias por tu tiempo y esfuerzo!

---

¡Feliz coding! 🚀
