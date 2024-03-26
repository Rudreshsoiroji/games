import { HStack } from "@chakra-ui/layout";
import { Image, Text } from "@chakra-ui/react";
import usePlatfroms from "../hooks/usePlatforms";

function Platforms() {
  const Platforms = usePlatfroms();
  return (
    <ul>
      <Text fontWeight="bold" fontSize={25}>
        PlatForms
      </Text>
      {Platforms.map((platform) => (
        <HStack margin={2}>
          <Image
            src={platform.image_background}
            width={10}
            height={10}
            borderRadius={5}
          />
          <Text>{platform.name}</Text>
          <Text>{platform.description}</Text>
        </HStack>
      ))}
    </ul>
  );
}

export default Platforms;
