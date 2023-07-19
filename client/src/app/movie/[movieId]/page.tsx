import { getAllUsers, getUser } from "@/lib/getUser";

import { Banner } from "@/components/Banner/Banner";
import { Metadata } from "next";
import React from "react";
import { User } from "@/models";
import banner03 from "../../../../public/images/banner03.jpg";
import { movies } from "@/mock";
import { notFound } from "next/navigation";

export interface Params {
  params: {
    userId: string;
  };
}

// export async function generateMetadata({
//   params: { userId },
// }: Params): Promise<Metadata> {
//   const userData: Promise<User | undefined> = getUser(Number(userId));
//   const user: User | undefined = await userData;

//   if (!user?.name) {
//     return {
//       title: "User Not Found",
//     };
//   }

//   return {
//     title: user?.username,
//     description: `This is the page of ${user?.username}`,
//   };
// }

export default async function page({ params: { userId } }: Params) {
  // const userData: Promise<any> = getAllUsers();
  // const user: any = await userData;

  // if (!user?.name) return notFound();

  return (
    <div>
      <Banner type="isDetail" background={banner03} detailContent={movies[0]} />
    </div>
  );
}
