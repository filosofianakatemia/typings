declare module 'koa-route' {
  import { Context } from 'koa'

  export function get(path: string, handler: (c: Context, ...args: string[]) => void): (c: Context, next: Function) => any
  export function post(path: string, handler: (c: Context, ...args: string[]) => void): (c: Context, next: Function) => any
  export function put(path: string, handler: (c: Context, ...args: string[]) => void): (c: Context, next: Function) => any
  export function del(path: string, handler: (c: Context, ...args: string[]) => void): (c: Context, next: Function) => any

}
