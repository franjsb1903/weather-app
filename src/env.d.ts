/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_GEOLOCATION_URL: string
  readonly PUBLIC_API_OPEN_WEATHER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
