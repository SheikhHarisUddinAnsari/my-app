import { defineField } from "sanity";
const product_Schema = {
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    { name: "title", title: "Product Title", type: "string" },

    { name: "description", title: "Product Description", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },

    defineField({
      name: "care",
      title: "Product Care",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
    }),

    { name: "type", title: "Product Type", type: "string" },

    defineField({ name: "price", title: "Product Price", type: "number" }),

    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};

export default product_Schema;
