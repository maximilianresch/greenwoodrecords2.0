import { Box, Stack } from "@chakra-ui/react";
import { ServiceCard } from "../../components/ServiceCard";

export default function Services() {
  return (
    <div>
        <Box pt="40px">
      <Stack direction={["column", "row"]} spacing={["20px", "60px"]} align="center" justify="center">
        <ServiceCard
          title="Aufnahme mit Techniker"
          firstline="550€ pro Tag"
          secondline="500€ ab 3 Tagen"
          thirdline="Schneiden/Post Production/Mischen 60€ pro Stunde
"       
        />
        <ServiceCard
          title="Aufnahme ohne Techniker"
          firstline="300€ pro Tag"
          secondline="250€ ab 3 Tagen"
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
