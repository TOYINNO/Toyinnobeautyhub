import Banner from "@/components/Banner";
import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";
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
  const banners = await client.fetch(bannerQuery);
  const newArrivalProducts = await client.fetch(newArrivalQuery);
  const bestsellerProducts = await client.fetch(BestsellerQuery);
  const DailydealsProducts = await client.fetch(DailyDealsQuery);
  return (
    <main className="text-sm overflow-hidden min-h-screen">
      <Banner banners={banners} />
      <NewArrival products={newArrivalProducts} bg="#fff" />
      <HomeBanner />
      <Bestseller products={bestsellerProducts} title="Our Bestseller" />
      <Dailydeals products={DailydealsProducts} title="Daily deals" />
    </main>
  );
};

export default HomePage;
