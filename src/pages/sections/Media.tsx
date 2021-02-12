import { MediaCard } from "../../components/MediaCard";
import { Box, Heading, Center } from "@chakra-ui/react";

export default function Media() {
  return (
    <div>
      <Heading pt="40px" pb="30px" as="h1" size="xl">
        Medien
      </Heading>
      <Center>
        <Box maxW="sm">
          <MediaCard
            image="/presseFoto-min.jpg"
            text="Tonmeister Fabian Hainzl lädt in sein Studio."
            title="meinbezirk.at"
            href="https://www.meinbezirk.at/krems/c-wirtschaft/tonmeister-fabian-hainzl-laedt-zu-aufnahmen-in-sein-studio_a4214442"
            linktext="mehr lesen"
          />
        </Box>
      </Center>
    </div>
  );
}
