import {
  Box,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";

interface Images {
  image: string;
  alt: string;
}

const GalleryData: Images[] = [
  {
    image: "/Gallery/couch-min.jpg",
    alt: "",
  },
  {
    image: "/Gallery/Flügel-min.jpg",
    alt: "",
  },
  {
    image: "/Gallery/GalerieFoto1-min.jpg",
    alt: "",
  },
  {
    image: "/Gallery/GalerieFoto2-min.jpg",
    alt: "",
  },
  {
    image: "/Gallery/Serverraum-min.jpg",
    alt: "",
  },
];

export default function Gallery() {
  return (
    <div>
      <Heading>Galerie</Heading>
      <Box overflowX="scroll">
      <HStack wrap="nowrap" spacing="5">
        {GalleryData.map((data) => {
          return (
              <Image w="100%" h="400px" src={data.image} />
          )
        })}
      </HStack>
      </Box>
    </div>
  );
}
