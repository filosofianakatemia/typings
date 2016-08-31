declare module 'koa-bodyparser' {
  import { Context } from 'koa'

  function bodyParser(): (c: Context, next: Function) => any
  namespace bodyParser {}

  export = bodyParser
}
