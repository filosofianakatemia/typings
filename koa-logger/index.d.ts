declare module 'koa-logger' {
  import { Context } from 'koa'

  function logger(): (c: Context, next: Function) => any
  namespace logger {}

  export = logger
}
