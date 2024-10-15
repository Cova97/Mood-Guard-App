Con la información proporcionada, aquí tienes el contenido para el archivo `README.md`:

```md
# MoodGuard - Web App para la Detección de Síntomas de Depresión

MoodGuard es una web app que ayuda a detectar síntomas de depresión mediante un chatbot. El chatbot consume una API personalizada basada en un modelo de OpenAI, ya preconfigurada y desplegada en Render. La interfaz está construida con Vite + React y utiliza Chakra UI para el diseño.

## Características

- Chatbot interactivo para ayudar en la detección de síntomas de depresión.
- API personalizada con un modelo de OpenAI desplegada en Render.
- Diseño responsivo utilizando Chakra UI.
- Facilidad de despliegue en Vercel.

## Tecnologías Utilizadas

- [Vite](https://vitejs.dev/) + [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/) para el diseño y la interfaz de usuario.
- [Render](https://render.com/) para el backend de la API.
- [Vercel](https://vercel.com/) para el despliegue de la web app.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados:

- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
  
Puedes verificar si Node.js está instalado ejecutando el siguiente comando en tu terminal:

```bash
node -v
```

Si no lo tienes instalado, puedes descargarlo desde [aquí](https://nodejs.org/).

## Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/moodguard.git
```

2. Navega al directorio del proyecto:

```bash
cd moodguard
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

El proyecto se ejecutará en `http://localhost:3000` por defecto.

## Uso

1. Una vez que el servidor esté corriendo, abre tu navegador y navega a `http://localhost:3000`.
2. Interactúa con el chatbot para analizar tus síntomas. El chatbot consumirá la API desplegada en Render (`https://moodguard-api.onrender.com`) para procesar las respuestas.

## Despliegue en Vercel

Para desplegar este proyecto en [Vercel](https://vercel.com/), sigue estos pasos:

1. Crea una cuenta en Vercel si no tienes una.
2. Importa tu repositorio de GitHub en Vercel.
3. Sigue las instrucciones de Vercel para configurar y desplegar la aplicación.

La app estará disponible en la URL generada por Vercel.

## API

La API de MoodGuard está desplegada en Render y ya está integrada en el proyecto. No es necesario realizar configuraciones adicionales. La API se encuentra en la siguiente URL:

```
https://moodguard-api.onrender.com
