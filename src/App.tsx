import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import Header from "./components/Header";

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
        <GridItem pl="2" bg="pink.300" area={"side"}>
          Nav
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
