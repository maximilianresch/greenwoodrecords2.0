import * as React from "react";
import { Box, Center, Image, Link } from "@chakra-ui/react";

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
            borderColor="#332E42"
            overflow="hidden"
            bgColor="#332E42"
            color="white"
          >
            <Image src={image} />
            <Box p="6">
              <Box mt="1" fontWeight="semibold" lineHeight="tight" isTruncated>
                {title}
              </Box>
              <Box>{subtitle}</Box>
              <Box>{text}</Box>
              <Box pt="4" align="center"><Link target="_blank" color="blue.100" href={href}>{linktext}</Link></Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
