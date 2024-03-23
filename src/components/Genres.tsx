import { HStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const Genres = () => {
  const genres = useGenre();
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
