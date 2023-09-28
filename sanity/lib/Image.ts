import React from 'react'
import myConfiguredSanityClient from "../../sanity/lib/sanity_Client";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../sanity/lib/sanity_Client";
import { Reference } from 'sanity';
type Props = {}
const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source: Reference) {
    return builder.image(source);
  }

  export default urlFor