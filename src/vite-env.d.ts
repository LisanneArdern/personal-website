/// <reference types="vite/client" />

// Injected by Vite's `define` at build time — ISO-8601 date string (YYYY-MM-DD).
declare const __BUILD_DATE__: string

// vite-imagetools: imports with `?...&as=picture` return a structured object
// rather than a URL string. These ambient modules describe that shape.
type PictureModule = {
  sources: {
    avif: string
    webp: string
    jpg?: string
    jpeg?: string
    png?: string
  }
  img: { src: string; w: number; h: number }
}

declare module '*?as=picture' {
  const value: PictureModule
  export default value
}

declare module '*&as=picture' {
  const value: PictureModule
  export default value
}
