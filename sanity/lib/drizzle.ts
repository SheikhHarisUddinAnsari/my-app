import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cart_Table = pgTable("cart", {
  Id: serial("id").primaryKey(),
  Product_id: varchar("product_id", { length: 255 }).notNull(),
  User_id: varchar("user_id", { length: 255 }).notNull(),
  Product_quantity: integer("product_quantity").notNull(),
  Product_title: varchar("product_title", { length: 255 }).notNull(),
  Product_type: varchar("product_type", { length: 255 }).notNull(),
  Product_price: integer("product_price").notNull(),
  Product_image: varchar("product_image").notNull(),
  Product_total_price:integer("product_total_price").notNull(),
});

export const db = drizzle(sql);
