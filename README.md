# 🧠 Centro de Neurología – Institutional Landing Page

Sitio web institucional del **Centro de Neurología de Venado Tuerto**, dirigido por el  
**Dr. Daniel Montanaro – Neurocirujano (Mat. 9353)**.

Landing page desarrollada para una institución médica real, con foco en experiencia de usuario, SEO local, rendimiento web y conversión mediante canales de contacto directo.

---

## 🌐 Sitio en producción

👉 https://www.centrodeneurologia.com.ar

---

## 🎯 Objetivos del proyecto

El proyecto fue desarrollado con cuatro objetivos principales:

1. Crear una **presencia digital clara, profesional y confiable** para el Centro de Neurología.
2. Facilitar el **contacto inmediato con pacientes** mediante WhatsApp y teléfono.
3. Construir una base sólida de **SEO técnico y SEO local** para búsquedas relacionadas con neurología y neurofisiología en Venado Tuerto.
4. Mantener una arquitectura simple, rápida y fácilmente mantenible.

---

## 🧩 Stack tecnológico

- **HTML5 semántico**
- **Tailwind CSS 3.4**
- **Vanilla JavaScript**
- **Schema.org / JSON-LD**
- **Google Analytics 4**
- **Google Search Console**
- **Cloudflare**
- **Wrangler**
- **WebP**
- **Fuentes WOFF2 self-hosted**

El sitio es completamente estático y no utiliza frameworks JavaScript ni dependencias de frontend innecesarias.

---

## 📁 Estructura del proyecto

```text
centrodeneurologia/
├── public/
│   ├── images/
│   ├── fonts/
│   ├── index.html
│   ├── styles.css
│   ├── analytics-events.js
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── manifest.json
│   ├── _headers
│   └── _redirects
│
├── legacy/
│   └── pages/
│
├── src/
│   └── input.css
│
├── package.json
├── tailwind.config.js
├── wrangler.jsonc
└── .gitignore
```

Las páginas históricas del proyecto se conservan dentro de `legacy/`, pero no forman parte del sitio desplegado en producción.

---

## 🎨 Frontend y UX

La interfaz fue desarrollada con un enfoque **mobile-first** y orientada especialmente a usuarios que necesitan encontrar información médica y medios de contacto rápidamente.

Incluye:

- navegación simple
- diseño responsive
- tipografía de alta legibilidad
- CTA principal de WhatsApp
- contacto telefónico directo
- ubicación del consultorio
- secciones desplegables para estudios de neurofisiología
- identidad visual consistente con el consultorio

Se evitó incorporar funcionalidad innecesaria que pudiera afectar la experiencia o el rendimiento.

---

## ⚡ Performance

Durante la optimización se trabajó especialmente sobre:

- eliminación del Tailwind CDN
- compilación y minificación de CSS
- imágenes WebP
- optimización del hero principal
- reducción del peso del isotipo
- eliminación del iframe embebido de Google Maps
- carga prioritaria del recurso LCP
- fuentes alojadas localmente
- reducción de dependencias externas
- eliminación de layout shifts

Resultados de Lighthouse obtenidos durante la optimización:

- **Desktop Performance: 100**
- **Mobile Performance: hasta 97**
- **SEO: 100**
- **Best Practices: 100**
- **CLS: 0**

> Los resultados de Lighthouse pueden variar entre ejecuciones según condiciones de red, caché y recursos de terceros.

---

## 🔎 SEO técnico

El proyecto implementa una arquitectura SEO orientada a búsquedas locales.

### On-page SEO

- `<title>` optimizado
- meta description
- canonical URL
- estructura jerárquica H1 / H2 / H3
- contenido semántico
- términos relacionados con neurología y neurofisiología
- información geográfica de Venado Tuerto y Santa Fe
- Open Graph
- Twitter Cards

### Indexación

- `robots.txt`
- `sitemap.xml`
- canonical
- redirecciones HTTP 301 para URLs históricas
- integración con Google Search Console

Las antiguas páginas individuales de estudios fueron reemplazadas por una única landing page. Las URLs anteriores conservan redirecciones permanentes para mantener continuidad SEO.

---

## 🧠 Structured Data

Se implementaron datos estructurados mediante **Schema.org JSON-LD**:

- `MedicalBusiness`
- `Physician`
- `MedicalProcedure`
- `ItemList`
- `WebSite`
- `PostalAddress`
- `GeoCoordinates`

Estos datos ayudan a los motores de búsqueda a comprender de forma estructurada la institución, el profesional, la ubicación y los estudios ofrecidos.

> La implementación de datos estructurados mejora la interpretación semántica del sitio, pero no garantiza la aparición de rich results en Google.

---

## 📍 SEO local

El sitio incluye información consistente de:

- nombre de la institución
- dirección
- ciudad
- provincia
- teléfono
- WhatsApp
- coordenadas geográficas
- Instagram

Ubicación:

**Pellegrini 931**  
Venado Tuerto (2600)  
Santa Fe, Argentina

---

## 📊 Analytics y medición

El proyecto utiliza **Google Analytics 4** para medir comportamiento y conversiones.

Se implementaron eventos personalizados para:

- clic en WhatsApp
- clic en teléfono
- clic en Instagram
- clic en ubicación
- apertura de estudios de neurofisiología

Ejemplos:

```text
click_whatsapp
click_phone
click_instagram
click_location
open_study_eeg
open_study_emg
open_study_potenciales
open_study_mapeo
open_study_vng
open_study_video_eeg
```

También se utiliza **Google Search Console** para seguimiento de indexación y rendimiento orgánico.

---

## 🔐 Seguridad y buenas prácticas

El sitio se sirve mediante HTTPS y Cloudflare.

Se configuraron headers HTTP para mejorar seguridad y comportamiento del navegador.

Además:

- no se almacenan datos médicos
- no existen formularios con información sensible
- no existe backend
- no se utilizan bases de datos
- los enlaces externos utilizan atributos de seguridad apropiados

---

## ☁️ Deploy

El proyecto se despliega automáticamente mediante **Cloudflare**.

Configuración principal:

```json
{
  "assets": {
    "directory": "./public"
  }
}
```

El proceso de build ejecuta:

```bash
npm run build:css
```

y posteriormente:

```bash
npx wrangler deploy
```

Solo el contenido de `public/` queda expuesto en producción.

---

## 🛠️ Desarrollo local

Instalar dependencias:

```bash
npm install
```

Compilar Tailwind:

```bash
npm run build:css
```

Modo watch durante desarrollo:

```bash
npm run dev:css
```

---

## 🧱 Decisiones de arquitectura

El proyecto prioriza simplicidad y rendimiento.

Por ese motivo:

- no se utiliza React, Vue ni otro framework
- no existe backend
- no se utiliza CMS
- Tailwind se compila antes del deploy
- los assets críticos se sirven localmente
- el contenido principal se encuentra disponible directamente en HTML

La arquitectura es deliberadamente simple porque los requisitos actuales no justifican una solución más compleja.

---

## 🚀 Evolución futura

La arquitectura permite incorporar en el futuro:

- nuevas páginas de servicios
- contenido médico informativo
- FAQ
- mejoras de SEO local
- nuevas métricas de conversión
- integración con Google Business Profile
- campañas de Google Ads

Estas funcionalidades no forman parte del alcance actual.

---

## 👨‍⚕️ Institución

**Centro de Neurología – Venado Tuerto**

Dr. Daniel Montanaro  
Neurocirujano · Mat. 9353

📍 Pellegrini 931 – Venado Tuerto (2600)  
📞 03462 427798  
📲 WhatsApp: 3462 503173

---

## 👨‍💻 Desarrollo

Desarrollado y mantenido por **Carlos Alberto Kaar**

GitHub: **CharlyKrDev**  
Email: **kaar.carlos@gmail.com**

---

## ✅ Estado del proyecto

**Production**

- ✅ Sitio desplegado
- ✅ Responsive
- ✅ SEO técnico implementado
- ✅ SEO local implementado
- ✅ Google Analytics 4
- ✅ Google Search Console
- ✅ Structured Data
- ✅ Redirecciones SEO
- ✅ Performance optimizada
- ✅ Cloudflare deployment
