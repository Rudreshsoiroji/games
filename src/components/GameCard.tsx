import {
  Card,
  Text,
  Heading,
  CardBody,
  Image,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Stack,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Game } from "./GameGrid";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={game.background_image} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{game.name}</Heading>
          <Text>{game.description}</Text>
          <Text fontSize="2xl">Review count: {game.reviews_count}</Text>{" "}
          <Text fontSize="2xl">Release Date: {game.released}</Text>
          <Text fontSize="2xl">Ratings: {game.rating}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GameCard;
