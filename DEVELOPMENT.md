# 🛠️ Guía de Desarrollo - Flat119

## 📂 Estructura del Proyecto

```
flat119/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── images/             # Galería de imágenes (24 fotos)
├── README.md           # Documentación principal
├── DEVELOPMENT.md      # Esta guía de desarrollo
└── .gitignore         # Archivos ignorados por Git
```

## 🎨 Diseño y Características

### **Paleta de Colores**
```css
--primary-blue: #1e3a8a    /* Azul principal */
--light-blue: #3b82f6     /* Azul claro/acentos */
--sky-blue: #dbeafe       /* Fondos suaves */
--accent-gold: #fbbf24     /* Detalles premium */
```

### **Tipografía**
- **Principal**: Inter (Google Fonts)
- **Display**: Playfair Display (títulos elegantes)

### **Secciones Principales**
1. **Hero** - Bienvenida con imagen de terraza
2. **Suites** - Suite Estándar ($165k) y Suite Plus ($280k)
3. **Amenidades** - 6 servicios premium
4. **Galería** - 6 espacios destacados
5. **Ubicación** - Google Maps + puntos de interés
6. **FAQ** - Preguntas frecuentes
7. **Contacto** - Formulario + info de contacto

## 🔧 Configuración Técnica

### **APIs Integradas**
- **Google Maps**: `AIzaSyDbA2CbmcyAXa4dBxDY5HmQ9q8BB7SdOQc`
- **WhatsApp**: +57 300 123 4567

### **Funcionalidades**
- ✅ Diseño responsive
- ✅ Animaciones on-scroll
- ✅ FAQ acordeón
- ✅ Galería con hover effects
- ✅ Botón WhatsApp flotante
- ✅ Reservas directas por WhatsApp

## 🚀 Comandos de Desarrollo

### **Git Workflow**
```bash
# Clonar proyecto
git clone https://github.com/Flat119/flat119.github.io.git

# Hacer cambios
git add .
git commit -m "Descripción del cambio"
git push

# Ver en vivo
# https://flat119.github.io
```

### **Servidor Local**
```bash
# Python
python3 -m http.server 8000

# Luego abrir: http://localhost:8000
```

## 📝 Futuras Mejoras Sugeridas

### **Funcionalidades**
- [ ] Sistema de reservas online
- [ ] Galería con lightbox
- [ ] Blog/noticias
- [ ] Múltiples idiomas (EN/ES)
- [ ] Integración con redes sociales
- [ ] Sistema de reviews/testimonios

### **SEO & Performance**
- [ ] Optimización de imágenes WebP
- [ ] Meta tags específicos
- [ ] Schema markup para hoteles
- [ ] Lazy loading mejorado
- [ ] Sitemap XML

### **Analíticas**
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Hotjar/heatmaps

## 🔄 Proceso de Actualización

### **Para añadir nuevas imágenes:**
1. Subir a carpeta `images/`
2. Actualizar referencias en HTML
3. Commit y push

### **Para cambiar precios:**
1. Editar en `index.html` sección rooms
2. Verificar consistencia en todo el sitio

### **Para añadir servicios:**
1. Agregar en sección amenities
2. Mantener grid de 6 elementos (3x2)

## 📞 Contacto del Desarrollador

- **Proyecto creado**: Junio 2025
- **Tecnología**: HTML5, CSS3, JavaScript ES6+
- **Hosting**: GitHub Pages
- **Dominio**: flat119.github.io

---

*Para retomar el desarrollo, asegúrate de tener la API key de Google Maps activa y actualizar los números de WhatsApp según sea necesario.*