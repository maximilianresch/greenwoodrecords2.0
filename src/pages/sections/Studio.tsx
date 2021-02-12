import { Box, Stack, Heading, Text, Image} from "@chakra-ui/react";
import { StudioCard } from "../../components/StudioCard";

export default function Studio() {
  return (
    <div id="studio">
      <Box pt="20" pb="20" textAlign="center">
        <Stack d="flex" justify="space-evenly" direction="row">
          <Box>
            <Image src="/ImageCall.png" w="100px" />{" "}
            <Heading size="sm">1. Kontakt aufnehmen</Heading>
            Lorem ipsum 
          </Box>
          <Box>
            {" "}
            <Image src="/ImageDeal.png" w="100px" />
            <Heading size="sm">2. Details besprechen</Heading>
            Lorem ipsum 
          </Box>
          <Box>
            <Image src="/ImageRecord.png" w="100px" />
            <Heading size="sm">3. Aufnahmen starten</Heading>
            Lorem ipsum 
          </Box>
        </Stack>
      </Box>
      <Heading pt="40px" pb="30px" as="h1" size="xl">
        Studio
      </Heading>
      <Box pt="10px" p="5px">
        <Text align="justify">
          Aus einer alten Traktorgarage für unseren Weinbetrieb wurde mit viel
          Arbeit ein Tonstudio geschaffen. Der Bau war eine große
          Herausforderung und unterzog sich langer Planungszeit. Jetzt freuen
          wir uns das Studio so präsentieren zukönnen. Zwei Aufnahmeräume mit 50
          m2 und 10 m2, sowie eine Regie mit 25 m2 und eine kleine Küche / WC
          umfassen das Gebäude. Aber die Erinnerungen an den Weinbetrieb und die
          Geschichte dieses Grundstückes bleiben nicht aus. Im alten
          Heurigenlokal beziehungsweise Weinkeller wartet ein großer
          Aufenthaltsraum mit großzügiger Bar und Küche, welcher ebenso zu einer
          weiteren Aufnahmemöglichkeit umfunktioniert werden kann. Dieser Raum
          bietet noch extra 100 m2. Das Studio und das Lokal sind per Video
          miteinander verbunden.
        </Text>
      </Box>
      <Box pt="40px">
        <Stack direction={["column", "row"]} spacing="18px">
          <StudioCard
            image="/Slider/Aufnahmeraum1dark-min.jpg"
            title="Aufnahmeraum 1"
            area="50"
            paragraph="Die lebhafte Akustik verleiht jeder Aufnahme einen natürlichen Klangcharakter.
             Es wurde in der Planung besonderes Augenmerk auf die Raumhöhe und das Volumen gelegt. 
             Der Raum ist unter anderem perfekt geeignet für Bandaufnahmen mit mittelgroßer Besetzung."
          />

          <StudioCard
            image="/Aufnahmeraum2-min.jpg"
            title="Aufnahmeraum 2"
            area="10"
            paragraph="Der kleine Aufnahmeraum eignet sich perfekt für die Abschirmung einzelner Musikinstrumente. 
            Von Flügel bis Schlagzeug findet alles in diesem Raum Platz."
          />

          <StudioCard
            image="/Slider/Regie-min.jpg"
            title="Regie"
            area="25"
            paragraph="Die Regie bietet eine fabelhafte Akustik welche an die Monitore der Firma ATC angepasst ist.
             Es wurde besonders viel Zeit und Mühe in den bau der Regie investiert. 
             Alle Möbel wurden Handangefertigt und bestehen aus massivem Eichenholz."
          />
        </Stack>
      </Box>
    </div>
  );
}
