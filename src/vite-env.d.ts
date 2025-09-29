/// <reference types="vite/client" />

declare module '*.css' {
  const content: Record<string, string>
  export default content
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.sass' {
  const content: Record<string, string>
  export default content
}

declare module '*.less' {
  const content: Record<string, string>
  export default content
}

declare module '*.styl' {
  const content: Record<string, string>
  export default content
}

declare module '*.stylus' {
  const content: Record<string, string>
  export default content
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.ico' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}
