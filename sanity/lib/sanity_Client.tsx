import {createClient} from "next-sanity"
import config from "./client_Config"
 const client = createClient(config)
 export default client;