"use client";

import "./MovieItems.scss";

import * as React from "react";

import { Button } from "@mui/material";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import { Movie } from "@/models";
import { MovieTrailer } from "../MovieTrailer/MovieTrailer";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import cake from "../../../public/images/cake.png";
import moment from "moment";
import tomato from "../../../public/images/tomato.png";

export interface IMovieItemsProps {
  direction: "horizontal" | "vertical";

  items: Movie;

  style?: React.CSSProperties;
}

export function MovieItems({
  direction,

  items,

  style,
}: IMovieItemsProps) {
  const [openTrailer, setOpenTrailer] = React.useState<boolean>(false);

  const handleOpenTrailer = () => {
    setOpenTrailer(!openTrailer);
  };

  return (
    <div
      style={style}
      className={
        direction === "vertical"
          ? "movie_items_container vertical"
          : "movie_items_container horizontal"
      }
    >
      <MovieTrailer
        movieTrailer={items.movieTrailer!}
        openTrailer={openTrailer}
        setOpenTrailer={setOpenTrailer}
      />

      <div className="movie_items">
        <div className="movie_thumbnail">
          <Image
            src={items.movieImage}
            alt={items.movieName}
            width={200}
            height={500}
            priority
          />
        </div>

        <div className="movie_content">
          <h5>{items.movieName}</h5>

          {direction === "horizontal" && (
            <>
              <p className="duration">{items.movieDuration}</p>

              <div className="movie_tags">
                {items.movieGenre?.map((genre, key) => {
                  return (
                    <a href="" key={key}>
                      {genre.genreName} |&nbsp;
                    </a>
                  );
                })}
              </div>

              <div className="release_date">
                {moment(new Date()).format("LLL")}
              </div>
            </>
          )}

          <ul>
            <li>
              <div className="rate_image">
                <Image
                  src={tomato}
                  alt={items.movieName}
                  width={0}
                  height={0}
                />
              </div>{" "}
              {items.movieRate?.tomatoes}%{" "}
            </li>
            <li>
              <div className="rate_image">
                <Image src={cake} alt={items.movieName} width={0} height={0} />
              </div>{" "}
              {items.movieRate?.audience}%{" "}
            </li>
          </ul>

          {direction === "horizontal" && (
            <div className="book_area">
              <div className="book_ticket">
                <div className="thumb">
                  <FavoriteIcon fontSize="small" />
                </div>

                <Button href="">
                  <div className="thumb">
                    <ConfirmationNumberIcon fontSize="small" />
                  </div>

                  <span>Book ticket</span>
                </Button>
              </div>

              <Button className="popup_video" onClick={handleOpenTrailer}>
                <div className="thumb">
                  <SlowMotionVideoIcon />
                </div>

                <span>Watch trailer</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
