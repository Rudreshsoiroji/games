import { Switch, useColorMode } from "@chakra-ui/react";

export default function toggleDark() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch onChange={toggleColorMode} padding={20} colorScheme="green">
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Switch>
  );
}
