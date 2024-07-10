import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-02-23";
const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId: projectId || "",
  dataset: dataset || "",
  apiVersion,
  token,
  useCdn: process.env.NODE_ENV === "production",
});

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity configuration. Check your environment variables."
  );
}

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const productQuery = groq`*[_type == 'product']{
  ...
}| order(_createdAt desc)`;

export const products = async () => {
  if (!projectId || !dataset) {
    throw new Error(
      "Missing Sanity configuration. Check your environment variables."
    );
  }
  const productData = await client.fetch(productQuery);
  return productData;
};
