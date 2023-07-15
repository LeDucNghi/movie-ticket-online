import "./BookingSection.scss";

import * as React from "react";

import { FilterForm } from "@/components/FilterItem/FilterForm";
import { Languages } from "@/models";

export interface IBookingSectionProps {
  name: string | undefined;
  languages: Languages[] | undefined;
}

export function BookingSection({ name, languages }: IBookingSectionProps) {
  return (
    <div className="booking_container">
      <div className="booking_content">
        <h3>{name} </h3>

        <div className="banner_tags">
          {languages?.map((language, key) => {
            return (
              <a href="" key={key}>
                {language.language}, &nbsp;
              </a>
            );
          })}
        </div>
      </div>

      <div className="banner_filter">
        <FilterForm />
      </div>
    </div>
  );
}
