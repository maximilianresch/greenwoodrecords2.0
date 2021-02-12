import * as React from "react";
import { Box, Center, Image, Link, Heading } from "@chakra-ui/react";

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  text: string;
  href: string;
  linktext: string;
}

export const MediaCard: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  text,
  href,
  linktext
}) => {
  return (
    <div>
      {" "}
      <Box>
        <Center>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            shadow="dark-lg"
            overflow="hidden"
            bgColor="#17204A"
            color="white"
          >
            <Image src={image} />
            <Box p="6">
              <Heading size="lg" fontWeight="semibold" lineHeight="tight" isTruncated>
                {title}
              </Heading>
              <Box>{subtitle}</Box>
              <Box>{text}</Box>
              <Box pt="4" align="center"><Link target="_blank" color="teal.100" href={href}>{linktext}</Link></Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
