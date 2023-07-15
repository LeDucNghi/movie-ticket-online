import { Backdrop } from "@mui/material";

export interface IMovieTrailerProps {
  movieTrailer: string;
  openTrailer: boolean;
  setOpenTrailer: any;
}

export function MovieTrailer({
  movieTrailer,
  openTrailer,
  setOpenTrailer,
}: IMovieTrailerProps) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openTrailer}
      onClick={() => setOpenTrailer(!openTrailer)}
    >
      <iframe
        width="600"
        height="400"
        src={movieTrailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </Backdrop>
  );
}
