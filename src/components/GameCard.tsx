import { Card, CardHeader, Heading, CardBody, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{game.name}</Heading>
      </CardHeader>

      <CardBody>
        <Image src={game.background_image} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
