import Banner from "@/components/Banner";
import { groq } from "next-sanity";
import { client, urlFor } from "@/lib/sanityClient";
import React from "react";
import NewArrival from "@/components/NewArrival";
import HomeBanner from "@/components/HomeBanner";
import Bestseller from "@/components/Bestseller";
import Dailydeals from "@/components/Dailydeals";

export const revalidate = 10;

const bannerQuery = groq`*[_type == 'banner']{
  image,
  _id
} | order(_createdAt asc)`;

const newArrivalQuery = groq`*[_type == 'product' && position == 'New Arrival']{
 ...
} | order(_createdAt asc)`;

const BestsellerQuery = groq`*[_type == 'product' && position == 'Bestseller']{
 ...
} | order(_createdAt asc)`;

const DailyDealsQuery = groq`*[_type == 'product' && position == 'Daily deals']{
 ...
} | order(_createdAt asc)`;

const HomePage = async () => {
  try {
    console.log("Sanity Client Config:", {
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    });

    const [
      banners,
      newArrivalProducts,
      bestsellerProducts,
      DailydealsProducts,
    ] = await Promise.all([
      client.fetch(bannerQuery),
      client.fetch(newArrivalQuery),
      client.fetch(BestsellerQuery),
      client.fetch(DailyDealsQuery),
    ]);

    console.log("Data fetched successfully");

    return (
      <main className="text-sm overflow-hidden min-h-screen">
        <Banner
          banners={banners.map((banner: any) => ({
            ...banner,
            image: urlFor(banner.image).url(),
          }))}
        />
        <NewArrival products={newArrivalProducts} bg="#fff" />
        <HomeBanner />
        <Bestseller products={bestsellerProducts} title="Our Bestseller" />
        <Dailydeals products={DailydealsProducts} title="Daily deals" />
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading page data. Please try again later.</div>;
  }
};

export default HomePage;
