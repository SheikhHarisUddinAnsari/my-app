import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import schemas from '../../sanity/schemas'

const config=defineConfig({
projectId:"ughsied2",
dataset:"production",
title:"Ecommerce Website",
apiVersion:"2023-05-10",
basePath:"/admin",
plugins:[deskTool(),visionTool({defaultApiVersion:"2023-09-02"})],
schema:schemas,
})

export default config