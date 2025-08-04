# Google Workspace vs. Cuenta Gratuita de Gmail

## Resumen

Para cualquier negocio serio, incluso unipersonal, la opción recomendada es **Google Workspace**. Una cuenta de Gmail gratuita es una solución temporal y arriesgada.

## Tabla Comparativa

| Característica | Google Workspace (Recomendado) | Cuenta de Gmail Gratuita |
| :--- | :--- | :--- |
| **Correo Electrónico** | Profesional: `contacto@tuempresa.com` | Personal: `tuempresa123@gmail.com` |
| **Imagen y Confianza** | **Muy Profesional.** Genera confianza. | **Poco profesional.** Imagen de amateur. |
| **Coste** | Suscripción mensual por usuario. | Gratuito. |
| **Control y Propiedad** | **Total.** La empresa es dueña de las cuentas y los datos. | **Nulo.** La cuenta es del individuo. **Alto riesgo.** |
| **Gestión de Usuarios** | **Centralizada.** Consola de administración. | **Inexistente.** |
| **Seguridad** | **Avanzada.** Controles y políticas forzadas. | **Básica.** Depende del usuario. |
| **Almacenamiento** | **Desde 30 GB** por usuario, hasta ilimitado. | **15 GB** compartidos. |
| **Escalabilidad** | **Excelente.** Fácil de añadir usuarios. | **Muy mala.** No escalable. |

## Conclusión

La inversión en Google Workspace es fundamental para la **credibilidad, el control y la seguridad** de un negocio. Te posiciona correctamente desde el inicio y protege los activos digitales de la empresa.

---

# Bitácora de Avances

## 29 de Julio de 2025

**Decisión Inicial:** Se comienza el proceso utilizando una cuenta de Gmail gratuita, con el plan de migrar a Google Workspace en el futuro.

**Plan de Acción Inicial:**

1.  **Crear Cuenta de Gmail:**
    *   **Acción:** Crear una nueva cuenta de Gmail con un nombre profesional.
    *   **Estado:** **Completado.**
    *   **Correo Creado:** `Flat119.living@gmail.com`

2.  **Configurar Google Business Profile (GMB):**
    *   **Acción:** Registrar el negocio en [google.com/business](https://google.com/business).
    *   **Estado:** Pendiente.

3.  **Verificar Propiedad en GMB:**
    *   **Acción:** Completar el proceso de verificación de Google.
    *   **Estado:** Pendiente.

4.  **Configurar Google Search Console:**
    *   **Acción:** Añadir el sitio web a [search.google.com/search-console](https://search.google.com/search-console).
    *   **Estado:** En progreso.

---
## 29 de Julio de 2025 (Continuación)

**Tarea:** Verificar la propiedad del dominio `flat119.com` en Google Search Console.

**Decisión Clave:** Se ha elegido el método de verificación de **"Dominio"** en lugar de "Prefijo de URL".
*   **Razón:** Este método es superior porque consolida todas las versiones de un sitio web (http, https, www, sin-www) en una única propiedad, proporcionando datos completos y unificados.

**Proveedor de Dominio Identificado:** Wix.

**Registros DNS a Configurar en Wix:**

1.  **Registro de Verificación de Google:**
    *   **Tipo:** `TXT`
    *   **Host:** Dejar en blanco (Wix lo asigna al dominio raíz `@`).
    *   **Valor:** `google-site-verification=JBH0dls38BoumN4LU8k9_9o4zbAqz9S5AxTcnMp8k-c`
    *   **Propósito:** Demostrar la propiedad del dominio a Google.

2.  **Registro SPF (Sender Policy Framework):**
    *   **Tipo:** `TXT`
    *   **Host:** Dejar en blanco.
    *   **Valor:** `v=spf1 include:_spf.google.com ~all`
    *   **Propósito:** Mejorar la entregabilidad del correo electrónico y prevenir la suplantación de identidad (spoofing). Es una buena práctica para el futuro uso del correo profesional.

**Estado de la Tarea:**
*   **Instrucciones para Wix:** Proporcionadas.
*   **Implementación:** Pendiente de ejecución por parte del usuario en el panel de Wix.

---
## 29 de Julio de 2025 (Planificación Adicional)

**Tarea:** Creación de perfiles en redes sociales.

**Objetivo:** Asegurar el nombre de la marca, establecer una presencia consistente y centralizar la gestión utilizando el nuevo correo electrónico.

**Plan de Acción para Redes Sociales:**

*   **Plataformas:** Instagram, Facebook, TikTok.
*   **Correo de Registro:** `Flat119.living@gmail.com`.
*   **Nombre de Usuario a Intentar (en orden de preferencia):**
    1.  `@flat119`
    2.  `@flat119living`
    3.  `@flat119.living` o `@flat119_living`

**Guía de Creación:**

1.  **Tipo de Cuenta:**
    *   **Facebook:** Crear una **Página de Negocio**, no un perfil personal.
    *   **Instagram:** Crear una cuenta y cambiarla a **"Cuenta Profesional"**.
    *   **TikTok:** Crear una cuenta y cambiarla a **"Cuenta de Empresa"**.
2.  **Información del Perfil:**
    *   **Foto de Perfil:** Utilizar el logo de `flat119` de manera consistente.
    *   **Biografía:** Redactar una descripción atractiva y uniforme para todas las plataformas.
    *   **Sitio Web:** Añadir `https://www.flat119.com` en el campo correspondiente de cada perfil.
3.  **Seguridad:**
    *   **Acción:** Guardar todas las credenciales en un gestor de contraseñas seguro.

**Estado de la Tarea:** Pendiente de ejecución por parte del usuario.
---
# Bitácora de Obstáculos y Plan de Acción

Esta sección documenta los inconvenientes técnicos que han surgido durante la configuración de las herramientas de Google, el diagnóstico del problema y la solución paso a paso que se debe ejecutar.

## Obstáculo 1: El Perfil de Negocio en Google (GMB) ya existe

Durante el proceso de creación del Perfil de Negocio en Google (GMB), la herramienta nos ha notificado que ya existe un perfil para "Flat 119" en la ubicación indicada.

*   **Descripción del Error:** Al intentar crear un nuevo perfil, Google detecta una coincidencia y nos pide confirmar si queremos reclamar un perfil existente.
*   **Causa Raíz:** Es muy probable que en el pasado se haya iniciado un registro en GMB, posiblemente desde otra cuenta de Google. Este perfil "fantasma" o incompleto es el que ahora debemos controlar. Crear un segundo perfil generaría un duplicado, lo cual es muy perjudicial para el SEO y confunde a los clientes.
*   **Solución: Reclamar la Propiedad del Perfil Existente.**

### **Pasos para la Solución:**

1.  **Iniciar el Proceso de Reclamación:**
    *   Ve a la búsqueda de Google y escribe `Flat 119 Bogotá`.
    *   En el panel de la derecha, busca y haz clic en el enlace **"¿Eres el propietario de esta empresa?"** o **"Own this business?"**.
2.  **Identificar la Cuenta Propietaria:**
    *   Google te pedirá iniciar sesión. Usa `flat119.living@gmail.com`.
    *   El sistema te mostrará una pista del correo electrónico que actualmente gestiona el perfil (ej: `co...@...com`). Esto nos ayudará a identificarlo.
3.  **Ejecutar la Verificación de Propiedad:**
    *   Google te ofrecerá uno o más métodos para demostrar que eres el dueño. Debes seguir las instrucciones para la opción que te resulte más accesible:
        *   **Teléfono:** Recibir un código por SMS o llamada.
        *   **Correo Electrónico:** Recibir un código en la cuenta de correo original.
        *   **Video:** Grabar un video mostrando la fachada y el interior del local.
        *   **Postal (El método de último recurso):** Recibir una postal con un código en la dirección física del negocio en un plazo de 1-2 semanas.
    *   Una vez recibido el código o completada la verificación, introdúcelo en la plataforma para tomar control total del perfil.

---

## Obstáculo 2: El Dominio `flat119.com` está Bloqueado en Google Workspace

Al intentar añadir el dominio `flat119.com` a la nueva cuenta de Google Workspace para crear un correo profesional (ej: `contacto@flat119.com`), el sistema muestra el error: "Este nombre de dominio ya está en uso".

*   **Descripción del Error:** Google impide asociar el dominio a nuestro nuevo Workspace porque ya está vinculado a otro servicio de Google.
*   **Causa Raíz:** Este problema es una consecuencia directa del **Obstáculo 1**. El perfil de GMB existente está asociado a `flat119.com`, bloqueando su uso en cualquier otro servicio de Google hasta que se demuestre la propiedad.
*   **Solución: Verificar la Propiedad del Dominio Directamente en Workspace.**

### **Pasos para la Solución (A realizar DESPUÉS de solucionar el Obstáculo 1):**

1.  **Acceder a la Consola de Administración:**
    *   Inicia sesión en [admin.google.com](https://admin.google.com) con la cuenta `flat119.living@gmail.com`.
2.  **Provocar el Error para Obtener la Solución:**
    *   Navega a `Cuenta` > `Dominios` > `Gestionar dominios`.
    *   Intenta añadir `flat119.com` de nuevo.
    *   En el mensaje de error, haz clic en el enlace azul que dice **"Sigue los pasos para verificar la propiedad"**.
3.  **Obtener el Código de Verificación TXT:**
    *   En la nueva pantalla, elige el método de verificación por **"Registro TXT"**.
    *   Copia la línea de texto completa que te proporcionará Google (ej: `google-site-verification=...`). Este código es único y diferente a otros que hayamos usado.
4.  **Añadir el Registro TXT en el Panel de Wix:**
    *   Ve a la configuración de tu dominio en Wix (`Gestionar Registros DNS`).
    *   Crea un **nuevo registro** con los siguientes datos:
        *   **Tipo:** `TXT`
        *   **Nombre de Host:** Dejar en blanco o poner `@`.
        *   **Valor:** Pegar el código de verificación obtenido de la Consola de Administración.
5.  **Finalizar la Verificación en Google:**
    *   Espera 5-10 minutos.
    *   Vuelve a la Consola de Administración de Google y haz clic en el botón **"Verificar"**. Esto desbloqueará el dominio y te permitirá crear tu correo profesional.

---

## Obstáculo 3: Google Rechaza el Enlace de Reservas de Terceros

Al intentar añadir el enlace de reservas de Cloudbeds (`https://hotels.cloudbeds.com/reservation/AcciF5`) en la sección de "Reservas" del Perfil de Negocio de Google, la plataforma lo rechaza.

*   **Descripción del Error:** GMB muestra un error o no permite guardar el enlace, sugiriendo un formato de dominio propio (ej: `tuempresa.com/reservas`).
*   **Causa Raíz:** Google prioriza la confianza y la consistencia de la marca. Al detectar un enlace que apunta a un dominio de terceros (`hotels.cloudbeds.com`) en lugar del dominio principal del negocio (`flat119.com`), lo bloquea por seguridad y para evitar la suplantación de identidad.
*   **Solución: Crear una Redirección 301 desde el Dominio Propio.**

### **Pasos para la Solución (Pendiente):**

1.  **Acceder al Proveedor de Dominio (Wix):**
    *   Iniciar sesión en el panel de control de Wix.
2.  **Crear la Redirección:**
    *   Navegar a la sección de **"Marketing y SEO"** y encontrar **"Redirecciones de URL"**.
    *   Crear una **"Nueva Redirección"** con la siguiente configuración:
        *   **Enlace de Origen:** `/reservar`
        *   **Enlace de Destino:** `https://hotels.cloudbeds.com/reservation/AcciF5`
        *   **Tipo de Redirección:** `301 (Permanente)`
3.  **Actualizar el Perfil de GMB:**
    *   Esperar unos minutos a que la redirección se active.
    *   Volver al panel de GMB y, en la sección de "Reservas", introducir el nuevo enlace: **`https://flat119.com/reservar`**.
    *   Google aceptará este enlace, ya que pertenece al dominio verificado del negocio.

---

## 31 de Julio de 2025

**Tarea:** Implementación y optimización del mapa de Google en `flat119.github.io`.

**Hitos Alcanzados:**

1.  **Obtención de API Key:** Se generó y obtuvo una API Key de Google Maps Platform.
2.  **Implementación del Mapa Básico:** Se actualizó `index.html` para incluir la API Key y se creó la función `initMap` en `script.js`.
3.  **Ajuste Fino de Coordenadas:** Se corrigió y ajustó la latitud y longitud del marcador de `Flat119` a su ubicación exacta (`4.699222885850154, -74.03910493535466`) para máxima precisión.
4.  **Puntos de Interés (POIs):** Se añadieron y verificaron las coordenadas de puntos de interés estratégicos como la Universidad El Bosque.
5.  **Zona Interactiva de Restaurantes:**
    *   Se definieron las coordenadas para un polígono que cubre la zona gastronómica de Usaquén.
    *   Se implementó la funcionalidad en `script.js` para dibujar dicho polígono y utilizar la Places API para buscar y mostrar todos los restaurantes dentro de esa área con marcadores personalizados.

**Tarea:** Optimización SEO para la palabra clave "hoteles unicentro".

**Hitos Alcanzados:**

1.  **Análisis y Reversión:** Se revirtieron los cambios de texto visibles en la web para mantener la estética original.
2.  **Optimización de Metadatos (Estrategia Invisible):**
    *   Se enriquecieron los `meta keywords` con términos como "hotel unicentro" y "alternativa hotel".
    *   Se modificaron los datos estructurados (schema.org) en el `ld+json` para incluir la frase "Somos la mejor alternativa a un hotel en Unicentro", enviando una señal fuerte y directa a Google sin afectar el contenido visible.

**Tarea:** Optimización y resolución de problemas del Perfil de Negocio en Google (GMB).

**Hitos Alcanzados:**

1.  **Verificación de Perfil:** Se confirmó que el perfil de GMB está verificado y no requiere introducción de PIN.
2.  **Optimización de Contenido:** Se proporcionó una descripción de negocio optimizada para ser añadida al perfil.
3.  **Diagnóstico de Problema de Ubicación:** Se identificó que la asociación incorrecta "Ubicado en: Casa Regis Bogota" se debe a una imprecisión del marcador en el mapa.
4.  **Plan de Acción:** Se proporcionaron instrucciones claras para corregir la posición del marcador en el mapa de GMB como solución principal al problema de la asociación incorrecta.

**Estado General:** Proyecto listo para actualizar los cambios en el repositorio y continuar con la optimización del perfil de GMB.

---

## Aclaración Estratégica: Anuncios en Google My Business

**Consulta:** Durante la optimización del perfil de GMB, apareció una opción para "completar un anuncio". Se generó la duda de si este proceso tenía un costo asociado.

**Diagnóstico:** La opción para crear anuncios dentro del panel de GMB es una integración con la plataforma de publicidad **Google Ads**. No es una función nativa de GMB.

**Resolución y Estrategia:**

*   **Costo:** La creación y diseño del anuncio (redacción, selección de palabras clave, etc.) es **totalmente gratuita**.
*   **Punto de Gasto:** El costo solo se incurre si el usuario completa los pasos finales del proceso, que son:
    1.  Establecer un **presupuesto** (diario o total).
    2.  Introducir **datos de pago** (tarjeta de crédito).
*   **Recomendación Estratégica:** Se ha decidido **ignorar esta opción por el momento**. La prioridad actual es maximizar la visibilidad **orgánica (gratuita)** a través de la optimización completa del perfil de GMB y el SEO de la página web. La publicidad de pago (Google Ads) se considerará como una estrategia futura, una vez que la base orgánica esté consolidada.
