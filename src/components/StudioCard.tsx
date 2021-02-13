import * as React from "react";
import { Box, Image, Center, Divider, Stack, Heading } from "@chakra-ui/react";

interface CardProps {
  image: string;
  title: string;
  area: string;
  paragraph: string;
}

export const StudioCard: React.FC<CardProps> = ({
  image,
  title,
  paragraph,
  area,
}) => {
  return (
    <div>
      <Box>
        <Stack spacing="30px" >
          <Box>
            <Center>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="dark-lg"
                bgColor="#0D0D0D"
                color="white"
              >
                <Image src={image} />
                <Box p="6">
                  <Heading
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    size="md"
                  >
                    {title}
                  </Heading>
                  <Box>
                    {area} m<sup>2</sup>
                  </Box>
                  <Divider pt="2"/>
                  <Box pt="2">{paragraph}</Box>
                </Box>
              </Box>
            </Center>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};
