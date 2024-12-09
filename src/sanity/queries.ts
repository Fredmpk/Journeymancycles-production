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
    bgImage{
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

export const GALLERY_QUERY = defineQuery(`*[_type == "gallery"][0]{
      _id,
      _createdAt,
      _updatedAt,
      images[]{
        ...,
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    }`);
