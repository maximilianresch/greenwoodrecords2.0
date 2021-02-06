import { Grid, GridItem, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <Box >
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg="tomato">
            <Image
              layout="responsive"
              width={200}
              height={200}
              src="/Gallery/couch-min.jpg"
            />
          </GridItem>
          <GridItem colSpan={2} bg="papayawhip">
            <Image
              layout="responsive"
              width={200}
              height={200}
              src="/Gallery/Flügel-min.jpg"
            />
          </GridItem>
          {/* <GridItem colSpan={2} bg="papayawhip" ><Image  src="/Gallery/GalerieFoto1-min.jpg" /></GridItem>
          <GridItem colSpan={4} bg="tomato" ><Image  src="/Gallery/GalerieFoto2-min.jpg" /></GridItem>
          <GridItem colSpan={4} bg="tomato" ><Image  src="/Gallery/Serverraum-min.jpg" /></GridItem>
       */}{" "}
        </Grid>
      </Box>
    </div>
  );
}
