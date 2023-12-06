import { type Project } from 'contentlayer/generated'

export type ProjectCore = Pick<
  Project,
  | '_id'
  | 'id'
  | '_raw'
  | 'body'
  | 'description'
  | 'github'
  | 'homepage'
  | 'name'
  | 'slug'
  | 'techstack'
  | 'type'
>
