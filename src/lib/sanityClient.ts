import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

console.log("Environment variables:");
console.log(
  "NEXT_PUBLIC_SANITY_PROJECT_ID:",
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
);
console.log(
  "NEXT_PUBLIC_SANITY_DATASET:",
  process.env.NEXT_PUBLIC_SANITY_DATASET
);
console.log(
  "NEXT_PUBLIC_SANITY_API_VERSION:",
  process.env.NEXT_PUBLIC_SANITY_API_VERSION
);
console.log("SANITY_API_TOKEN is set:", !!process.env.SANITY_API_TOKEN);

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-02-23";
const token = process.env.SANITY_API_TOKEN;

console.log("Parsed values:");
console.log("projectId:", projectId);
console.log("dataset:", dataset);
console.log("apiVersion:", apiVersion);
console.log("token is set:", !!token);

export const client = createClient({
  projectId:
    projectId ||
    (() => {
      throw new Error(
        "projectId is missing. Check your environment variables."
      );
    })(),
  dataset:
    dataset ||
    (() => {
      throw new Error("dataset is missing. Check your environment variables.");
    })(),
  apiVersion,
  token,
  useCdn: process.env.NODE_ENV === "production",
});

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
