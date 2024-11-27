import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
    _id, 
    title,
    mainImange,
    gallery,
    description,
    dateSheet
  }`);

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
    _id,
    mainVideo {
      asset->{
        url
      }
    }
  }`);
