import { Banner } from "@/components/Banner/Banner";
import React from "react";
import banner03 from "../../../public/images/banner03.jpg";
import { movies } from "@/mock";

export default function page() {
  return (
    <div>
      <Banner
        type="isBooking"
        background={banner03}
        detailContent={movies[0]}
      />
    </div>
  );
}
