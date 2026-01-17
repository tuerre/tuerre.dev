import type { AstroComponentFactory } from 'astro/runtime'

import Cpp from './icons/c++.astro'
import CSS from './icons/css.astro'
import Git from './icons/git.astro'
import HTML5 from './icons/html.astro'
import MySQL from './icons/mysql.astro'
import Csharp from './icons/csharp.astro'
import NodeJS from './icons/nodejs.astro'
import GitHub from './icons/GitHub.astro'
import AstroIcon from './icons/astro.astro'
import Tailwind from './icons/tailwind.astro'
import Supabase from './icons/supabase.astro'
import SqlServer from './icons/sqlserver.astro'
import JavaScript from './icons/javascript.astro'
import TypeScript from './icons/typescript.astro'
import PostgreSql from './icons/postgresql.astro'
import NextJS from './icons/nextjs.astro'
import ReactJS from './icons/reactjs.astro'
import VSCode from './icons/vscode.astro'
import ExpressJS from './icons/expressjs.astro'

export const iconMap: Record<string, AstroComponentFactory> = {
  'c++': Cpp,
  'csharp': Csharp,
  'javascript': JavaScript,
  'nodejs': NodeJS,
  'typescript': TypeScript,
  'sqlserver': SqlServer,
  'mysql': MySQL,
  'supabase': Supabase,
  'html': HTML5,
  'css': CSS,
  'tailwind': Tailwind,
  'astro': AstroIcon,
  'git': Git,
  'github': GitHub,
  'postgresql': PostgreSql,
  'nextjs': NextJS,
  'reactjs': ReactJS,
  'react-native': ReactJS,
  'vscode': VSCode,
  'expressjs': ExpressJS,
}
