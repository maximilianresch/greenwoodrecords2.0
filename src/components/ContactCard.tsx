import * as React from "react";
import { Box, Center, Heading, Image, Divider } from "@chakra-ui/react";

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  text: string;
}

export const ContactCard: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  text,
}) => {
  return (
    <div>
      {" "}
      <Box>
        <Center>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bgColor="#4D5159"
            color="white"
          >
            <Image src={image} />
            <Box p="4" >
              <Heading
                lineHeight="tight"
                size="lg"
                isTruncated
              >
                {title}
              </Heading>
              <Heading size="md">{subtitle}</Heading>
              <Divider />
              <Box>{text}</Box>
            </Box>
          </Box>
        </Center>
      </Box>
    </div>
  );
};
