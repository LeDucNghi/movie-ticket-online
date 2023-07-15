import "./DetailSection.scss";

import * as React from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/models";
import { MovieTrailer } from "@/components/MovieTrailer/MovieTrailer";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import audience from "../../../../public/images/cake.png";
import banner03 from "../../../../public/images/banner03.jpg";
import moment from "moment";
import tomato from "../../../../public/images/tomato.png";

export interface IDetailSectionProps {
  movie: Movie;
}

export function DetailSection({ movie }: IDetailSectionProps) {
  const [openTrailer, setOpenTrailer] = React.useState<boolean>(false);

  return (
    <div className="detail_container">
      <MovieTrailer
        openTrailer={openTrailer}
        setOpenTrailer={setOpenTrailer}
        movieTrailer={movie.movieTrailer!}
      />

      <div className="detail_content">
        <div className="detail_thumbnail">
          <div
            className="thumbnail_trailer"
            onClick={() => setOpenTrailer(!openTrailer)}
          >
            <SlowMotionVideoIcon className="thumbnail_icon" />
          </div>

          <Image src={banner03} alt="movie thumbnail" width={0} height={0} />
        </div>

        <div className="detail">
          <h3>{movie.movieName} </h3>

          <div className="movie_languages">
            {movie.movieLanguages?.map((language, key) => {
              return (
                <a href="" key={key}>
                  {language.language},{" "}
                </a>
              );
            })}
          </div>

          <div className="movie_tags">
            {movie.movieGenre?.map((genre, key) => {
              return (
                <a href="" key={key}>
                  {genre.genreName}{" "}
                </a>
              );
            })}
          </div>

          <div className="movie_duration">
            <div className="duration_item">
              <CalendarMonthIcon className="item_icon" />

              <span>{moment(movie.movieReleaseDate).format("LLL")} </span>
            </div>
            <div className="duration_item">
              <AccessTimeIcon className="item_icon" />

              <span>{movie.movieDuration} </span>
            </div>
          </div>
        </div>
      </div>

      <div className="detail_book_section">
        <div className="book_wrapper">
          <div className="movie_rating">
            <div className="rating_items">
              <div className="items_header">
                <Image src={tomato} alt="rating logo" width={0} height={0} />
                <span>{movie.movieRate?.tomatoes}% </span>
              </div>

              <p>Tomatometer</p>
            </div>
            <div className="rating_items">
              <div className="items_header">
                <Image src={audience} alt="rating logo" width={0} height={0} />
                <span>{movie.movieRate?.audience}% </span>
              </div>

              <p>Audience Score</p>
            </div>
            <div className="rating_items">
              <div className="items_header">
                <Image src={audience} alt="rating logo" width={0} height={0} />
                <span>{movie.movieRate?.audience} </span>
              </div>

              <p>Users Rating</p>
            </div>
          </div>

          <Link rel="preload" as="style" className="custom_link" href="/booking">
            book tickets
          </Link>
        </div>
      </div>
    </div>
  );
}
