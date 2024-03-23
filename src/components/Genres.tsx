import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { HStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

const Genres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => setGenres(res.data.results));
  }, []);

  return (
    <ul>
      <Text fontWeight="bold" fontSize={25}>
        Genres
      </Text>
      {genres.map((genre) => (
        <HStack margin={2}>
          <Image
            src={genre.image_background}
            width={10}
            height={10}
            borderRadius={5}
          />
          <Text>{genre.name}</Text>
        </HStack>
      ))}
    </ul>
  );
};

export default Genres;
