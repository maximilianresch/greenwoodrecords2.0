import { Box, Heading, Image } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

import "swiper/swiper-bundle.min.css";

import useResponsive from "../../helper/useResponsive";

SwiperCore.use([Navigation, Pagination]);

interface Images {
  image: string;
  alt: string;
  key?: string
}

const GalleryData: Images[] = [
  {
    image: "/Gallery/Flügel-min.jpg",
    alt: "Gallery Flügel",
    key: "Gallery Flügel",
  },
  {
    image: "/Gallery/GalerieFoto1-min.jpg",
    alt: "Galeriefoto Mikrofone",
    key: "Galeriefoto Mikrofone",
  },

  {
    image: "/Gallery/Serverraum-min.jpg",
    alt: "Foto von Server",
    key: "Foto von Server",
  },
  {
    image: "/Gallery/GalerieFoto2-min.jpg",
    alt: "Foto von Aufnahmeberreich",
    key: "Foto von Aufnahmeberreich",
  },
  {
    image: "/Gallery/couch-min.jpg",
    alt: "Couch in Regie",
    key: "Couch in Regie",
  },
];

export default function Gallery() {
  const { isDesktop } = useResponsive();

  return (
    <Box id="gallery">
      <Heading pt="40px" pb="30px" as="h1" size="xl">
        Galerie
      </Heading>

      <Box>
        <Swiper
          spaceBetween={50}
          slidesPerView={isDesktop ? 2 : 1}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
        >
          {GalleryData.map((data) => {
            return (
              <Box>
                <SwiperSlide>
                  <Image h="80vh" w="auto" key={data.key} src={data.image} alt={data.alt}/>
                </SwiperSlide>
              </Box>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
}
