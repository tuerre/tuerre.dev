declare module '*.astro' {
  import { AstroComponentFactory } from 'astro/dist/runtime/server/index.js';
  const astroComponent: AstroComponentFactory;
  export default astroComponent;
}

declare module '@fontsource-variable/onest';
