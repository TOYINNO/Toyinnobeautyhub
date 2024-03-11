"use client";
import { NextStudio } from "next-sanity/studio";
import sanityConfig from "../../../../sanity.config";

function Studio() {
  return <NextStudio config={sanityConfig} />;
}

export default Studio;
