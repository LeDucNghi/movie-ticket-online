import { Banner } from "@/components/Banner/Banner";
import { FilterItem } from "@/components/FilterItem/FilterItem";
import { GenreWidgets } from "@/constants/clusterWidgets";
import { Metadata } from "next";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import banner02 from "../../public/images/banner02.jpg";

export const metadata :Metadata = {
  title : "Bolero - Online Ticket Booking",
  description : "Generate by ASEC"
}

export default function Home() {
  return (
    <main className="">
      <Banner background={banner02} type="isHome" />

      <Wrapper
        title="language"
        style={{
          marginTop: "20rem",
        }}
      >
        <>
          {GenreWidgets.map((genre, key) => {
            return (
              <FilterItem
                style={{
                  margin: "0.5rem 0",
                }}
                key={key}
                items={genre}
              />
            );
          })}
        </>
      </Wrapper>
    </main>
  );
}
