import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas'


export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'ughsied2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema:schemas,
})
