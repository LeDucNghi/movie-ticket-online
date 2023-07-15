import "./HomeSection.scss";

import * as React from "react";

import { CitiesOption } from "@/constants/clusterWidgets";
import { CustomSelect } from "../../Custom/Select/Select";
import { CustomTextfield } from "../../Custom/Textfield/Textfield";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";
import cinema from "../../../../public/images/cinema.png";
import city from "../../../../public/images/city.png";
import date from "../../../../public/images/date.png";

export interface IHomeSectionProps {
  setfieldValue: (value: string) => any;
}

export function HomeSection({ setfieldValue }: IHomeSectionProps) {
  return (
    <>
      <div className="section_content">
        <h1>
          get <span>movie</span> tickets
        </h1>

        <p>
          Buy movie tickets in advance, find movie times watch trailer, read
          movie reviews and much more
        </p>
      </div>

      <div className="search_movie_section">
        <div className="search_header">
          <h6>welcome to boleto</h6>
          <h3>what are you looking for</h3>
        </div>

        <div className="search_main">
          <CustomTextfield
            type="text"
            hasIcons={true}
            icons={<SearchIcon />}
            label="Search for movie..."
            handleChange={setfieldValue}
          />

          <div className="search_filter">
            <Image src={city} alt="city icon" width={0} height={0} />

            <span>City</span>

            <CustomSelect
              label="City"
              handleChange={setfieldValue}
              options={CitiesOption}
            />
          </div>

          <div className="search_filter">
            <Image src={date} alt="city icon" width={0} height={0} />

            <span>City</span>

            <CustomSelect
              label="City"
              handleChange={setfieldValue}
              options={CitiesOption}
            />
          </div>

          <div className="search_filter">
            <Image src={cinema} alt="city icon" width={0} height={0} />

            <span>City</span>

            <CustomSelect
              label="City"
              handleChange={setfieldValue}
              options={CitiesOption}
            />
          </div>

          <div className="search_blur"></div>
        </div>
      </div>
    </>
  );
}
