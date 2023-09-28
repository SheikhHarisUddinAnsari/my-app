import { SchemaTypeDefinition } from "sanity";
import product_Schema from "./product_Schema";
import category_Schema from "./category_Schema";

const schema:{types:SchemaTypeDefinition[]}={
types:[product_Schema,category_Schema]
}
export default schema