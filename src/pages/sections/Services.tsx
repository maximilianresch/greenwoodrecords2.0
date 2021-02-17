import { Box, Stack, Heading } from "@chakra-ui/react";
import Image from "next/image";
import { ServiceCard } from "../../components/ServiceCard";

export default function Services() {
  return (
    <div id="services">
      <Heading pt="40px" pb="30px" as="h1" size="xl">
        Leistungen
      </Heading>
      <Box>
        <Image
          src="/RegieMischpult-min.jpg"
          alt="großes Foto vom Mischpult in der Regie"
          layout="responsive"
          width={700}
          height={475}
        />
        <Stack
          direction={["column", "row"]}
          spacing={["20px", "60px"]}
          align="center"
          justify="center"
          mt={["2", "-28"]}
          position="relative"
        >
          <ServiceCard
            title="Aufnahme ohne Techniker"
            firstline="300€ pro Tag"
            secondline="250€ ab 3 Tagen"
          />
          <ServiceCard
            title="Aufnahme mit Techniker"
            firstline="550€ pro Tag"
            secondline="500€ ab 3 Tagen"
            thirdline="Schneiden/Post Production/Mischen 60€ pro Stunde"
          />
          <ServiceCard
            title="Klavierstimmer"
            firstline="140€ pro Stimmung"
            secondline="Der Flügel ist auf 440Hz gestimmt."
          />
        </Stack>
      </Box>
    </div>
  );
}
