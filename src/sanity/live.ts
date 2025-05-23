import { defineLive } from "next-sanity";
import { client } from "@/sanity/client";
import { token } from "./token";

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion: "2024-01-14" }),
  serverToken: token,
  browserToken: token,
});
