import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]{
    _id, 
    title,
    mainImage{
    asset ->{
    url
    }
    },
  }`);

export const PRODUCT_DETAIL_QUERY = defineQuery(
  `*[_type == "product" && _id == $id][0] {
      _id, 
    title,
    mainImage{
    asset ->{
    url
    }
    },
    gallery,
    description,
    dateSheet
  }`
);

export const HERO_QUERY = defineQuery(`*[_type == "hero"][0]{
    _id,
    mainVideo {
      asset->{
        url
      }
    }
  }`);
