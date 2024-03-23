import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";
import Genres from "./components/Genres";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
             "side main"`,
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <Header />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"side"}>
          <Genres />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
