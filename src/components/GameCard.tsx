import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} height={300} />
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text fontSize="2xl">Release Date: {game.released}</Text>
          <Text fontSize="2xl">Ratings: {game.rating}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
