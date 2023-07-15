import { Banner } from "@/components/Banner/Banner";
import { Metadata } from "next";
import React from "react";
import { User } from "@/models";
import banner03 from "../../../../public/images/banner03.jpg";
import { getUser } from "@/lib/getUser";
import { movies } from "@/mock";

export interface Params {
  params: {
    userId: string;
  };
}

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(Number(userId));
  const user: User = await userData;

  if (!user.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: user.username,
    description: `This is the page of ${user.username}`,
  };
}

export default function page() {
  return (
    <div>
      <Banner type="isDetail" background={banner03} detailContent={movies[0]} />
    </div>
  );
}
