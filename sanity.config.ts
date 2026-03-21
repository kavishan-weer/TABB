import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/sanity/schemaTypes/index'
import {projectId, dataset} from './src/sanity/env'

export default defineConfig({
  name: 'default',
  title: 'TABB Paw Care',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema,
})
