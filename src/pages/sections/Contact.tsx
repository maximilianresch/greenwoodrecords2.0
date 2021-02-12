import { Box, Stack, Text, Heading } from "@chakra-ui/react";
import { ContactCard } from "../../components/ContactCard";

export default function Contact() {
  return (
    <div id="contact">
      <Heading pt="40px" pb="30px" as="h1" size="xl">Contact</Heading>
      <Box>
        <Stack direction={["column", "row"]} align="center" justify="center" spacing="20">
          <Box w={[300, 500]} >
            <ContactCard
              image="/ContactImage-min.jpg"
              title="Fabian Hainzl"
              subtitle="Tonmeister"
              text="Meine jahrelange Erfahrung als Musiker hilft mir in der Arbeit als Tonmeister und Produzent. 
          Des weiteren belege ich das Tonmeisterstudium an der Universität für Musik und darstellende Kunst Wien."
            />
          </Box>
          <Box >
            <Stack align="center" justify="center">
              <Heading textAlign="center" pb="10">Wir freuen uns auf Ihre Nachricht!</Heading>
              <Text>Tonstudio</Text>
              <Text>Fabian Hainzl</Text>
              <Text>Gföhlerstraße 34</Text>
              <Text>A-3552 Lengenfeld</Text>
              <Text>
                Tel.: <a href="tel: +43 699 17007298"></a> +43 699 17007298
              </Text>
              <Text>
                e-mail:{" "}
                <a
                  href="mailto:office@greenwoodrecords.at?subject=greenwoodrecords%20Anfrage"
                  target="_blank"
                >
                  office@greenwoodrecords.at
                </a>{" "}
              </Text>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
