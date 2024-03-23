import {
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import SearchBar from "./SearchBar";
import ToggleDark from "./ToggleDark";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text fontSize={20}>RAWG</Text>
      <div style={{ padding: "20", margin: 20 }}>
        <SearchBar />

        <Menu>
          <ToggleDark />
          <MenuButton
            as={Button}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "black.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            My Library
          </MenuButton>
          <MenuList>
            <MenuItem>My Library</MenuItem>
            <MenuItem>Overview</MenuItem>
            <MenuItem>My Games</MenuItem>
            <MenuItem>Wishlist</MenuItem>
            <MenuItem>Reviews</MenuItem>
            <MenuItem>Collection</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            rightIcon={<AddIcon />}
            as={Button}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "black.400" }}
            _focus={{ boxShadow: "outline" }}
          ></MenuButton>
          <MenuList>
            <MenuItem>Add a Game to the Library</MenuItem>
            <MenuItem>Add a Missing Game</MenuItem>
            <MenuItem>Start a Collection</MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "black.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            ....
          </MenuButton>
          <MenuList>
            <MenuItem>Setting</MenuItem>
            <MenuItem>How Does RAWG feel</MenuItem>
            <MenuItem>Leaderboard</MenuItem>
            <MenuItem>Discord</MenuItem>
            <MenuItem>@rawg the Picture</MenuItem>
            <MenuItem>@rawg the world</MenuItem>
            <MenuItem>API</MenuItem>
            <MenuItem>Sitemap</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
