import { createClient } from "next-sanity";
import { dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-11-01",
  useCdn: false,
});
