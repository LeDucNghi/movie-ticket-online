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
  const handlePauseTrailer = () => {
    setOpenTrailer(!openTrailer);
    console.log("trailer is paused");
  };

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openTrailer}
      onClick={handlePauseTrailer}
    >
      <iframe
        width="600"
        height="400"
        src={movieTrailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onPause={handlePauseTrailer}
      ></iframe>
    </Backdrop>
  );
}
