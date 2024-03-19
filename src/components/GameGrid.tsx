import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  description: string;
  games_count: number;
  reviews_count: number;
  rating: string;
  rating_top: number;
  platforms: [
    {
      platform: {
        id: 0;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
  released: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results));
  });

  return games.map((game) => <GameCard game={game} />);
};

export default GameGrid;
