import { Box, Stack, Text, Heading, Link } from "@chakra-ui/react";
import { ContactCard } from "../../components/ContactCard";
import {Maps} from '../../components/Maps';

export default function Contact() {
  return (
    <div id="contact">
      <Heading pt="40px" pb="30px" as="h1" size="xl">
        Kontakt
      </Heading>
      <Box>
        <Stack
          direction={["column", "row"]}
          align="center"
          justify="center"
          spacing="20"
        >
          <Box w={[300, 500]}>
            <ContactCard
              image="/ContactImage-min.jpg"
              title="Fabian Hainzl"
              subtitle="Tonmeister"
              text="Meine jahrelange Erfahrung als Musiker hilft mir in der Arbeit als Tonmeister und Produzent. 
          Des weiteren belege ich das Tonmeisterstudium an der Universität für Musik und darstellende Kunst Wien."
            />
          </Box>
          <Box>
            <Stack align="center" justify="center" textAlign="center">
              <Heading pb="10">Wir freuen uns auf Ihre Nachricht!</Heading>
              <Box fontSize="xl">
                <Text>Tonstudio</Text>
                <Text>Fabian Hainzl</Text>
                <Text>
                  {" "}
                  <Text>
                    Gföhlerstraße 34
                  </Text>
                </Text>
                <Text>A-3552 Lengenfeld</Text>
                <Text>
                  Tel.:{" "}
                  <Link href="tel: +43 660 3002487" color="teal.600">
                  +43 660 3002487
                  </Link>
                </Text>
                <Text>
                  e-mail:{" "}
                  <Link
                    color="teal.600"
                    href="mailto:office@greenwoodrecords.at?subject=greenwoodrecords%20Anfrage"
                    target="_blank"
                  >
                    office@greenwoodrecords.at
                  </Link>{" "}
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Box textAlign="center">
        <Heading pt="50px" pb="30px" as="h1" size="lg">
          Unser Standort
        </Heading>
        <Maps />
      </Box>
    </div>
  );
}
