/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_API_GEOLOCATION_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
