import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default function useGenre() {
  const genres = useData<Genre>("/genres");

  return genres;
}
