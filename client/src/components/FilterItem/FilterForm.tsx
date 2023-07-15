import "./FilterForm.scss";

import * as React from "react";

import { CitiesOption } from "@/constants";
import { CustomSelect } from "../Custom/Select/Select";
import Image from "next/image";
import cinema from "../../../public/images/cinema.png";
import city from "../../../public/images/city.png";
import date from "../../../public/images/date.png";
import exp from "../../../public/images/exp.png";

export interface IFilterFormProps {}

export function FilterForm(props: IFilterFormProps) {
  const [fieldValue, setFieldValue] = React.useState("");

  return (
    <form>
      <div className="form_items">
        <Image src={city} alt="" width={0} height={0} />

        <span>city</span>

        <CustomSelect
          label="City"
          options={CitiesOption}
          handleChange={setFieldValue}
        />
      </div>
      <div className="form_items">
        <Image src={date} alt="" width={0} height={0} />

        <span>date</span>

        <CustomSelect
          label="City"
          options={CitiesOption}
          handleChange={setFieldValue}
        />
      </div>
      <div className="form_items">
        <Image src={cinema} alt="" width={0} height={0} />

        <span>cinema</span>

        <CustomSelect
          label="City"
          options={CitiesOption}
          handleChange={setFieldValue}
        />
      </div>
      <div className="form_items">
        <Image src={exp} alt="" width={0} height={0} />

        <span>experience</span>

        <CustomSelect
          label="City"
          options={CitiesOption}
          handleChange={setFieldValue}
        />
      </div>
    </form>
  );
}
