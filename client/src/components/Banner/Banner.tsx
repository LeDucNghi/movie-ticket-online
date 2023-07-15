"use client";

import "./Banner.scss";

import Image, { StaticImageData } from "next/image";

import { BookingSection } from "./BookingSection/BookingSection";
import { DetailSection } from "./DetailSection/DetailSection";
import { HomeSection } from "./HomeSection/HomeSection";
import { Movie } from "@/models";
import { useState } from "react";

type Banner = "isDetail" | "isHome" | "isBooking";

export interface IBannerProps {
  background: StaticImageData | string;
  type?: Banner;
  detailContent?: Movie;
}

export function Banner({ background, type, detailContent }: IBannerProps) {
  const [fieldValue, setfieldValue] = useState("");

  return (
    <div className="banner_container">
      <div className="banner_thumbnail">
        <Image priority src={background} alt="thumbnail" />
      </div>

      {type === "isBooking" && (
        <BookingSection
          name={detailContent?.movieName}
          languages={detailContent?.movieLanguages}
        />
      )}

      {type === "isDetail" && <DetailSection movie={detailContent!} />}

      {type === "isHome" && <HomeSection setfieldValue={setfieldValue} />}
    </div>
  );
}
