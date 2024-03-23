import useData from "./useData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: string;
  released: string;
}

export default function useGames() {
  const games = useData<Game>("/games");

  return games;
}
