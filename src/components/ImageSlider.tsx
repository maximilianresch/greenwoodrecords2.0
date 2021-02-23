import * as React from "react";
import { Box,  } from "@chakra-ui/react";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import styles from "./index.module.css";
import Image from 'next/image';

interface Data {
  image: string;
  alt: string;
  key?: string;
}

const SliderData: Data[] = [
  {
    image: "/Slider/Aufnahmeraum1dark-min.jpg",
    alt: "Aufnahmeraum1dark",
    key: "Aufnahmeraum1dark",
  },
  {
    image: "/Slider/Aufnahmeraum1-min.jpg",
    alt: "Aufnahmeraum1",
    key: "Aufnahmeraum1",
  },
  {
    image: "/Slider/Regie-min.jpg",
    alt: "Regie",
    key: "Regie",
  },
];

export const ImageSlider: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  React.useEffect(() => {
    const timeout = setTimeout(
      () => setCurrent((current + 1 + length) % length),
      6000
    );
    return () => clearTimeout(timeout);
  }, [current, length]);

  return (
    <Box className={styles.slider} id="top">
      <TiChevronLeft className={styles.leftArrow} onClick={prevSlide} />
      <TiChevronRight className={styles.rightArrow} onClick={nextSlide} />
      {SliderData.map((data, i) => {
        return (
          <Box
          key={data.key}
            className={
              i === current
                ? `${styles.slide} ${styles.active} `
                : `${styles.slider}`
            }
          >
            {i === current && (
              <Image
                priority={true}
                className={styles.image}
                src={data.image}
                alt={data.alt}
                layout="intrinsic"
                width={1400}
                height={980}
                key={data.key}
              />
            )}
          </Box>
        );
      })}
    </Box>
  );
};
