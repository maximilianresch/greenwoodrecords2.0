import * as React from "react";
import { Box, Image, Wrap, WrapItem, Center, Divider } from "@chakra-ui/react";

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
        <Wrap spacing="30px" p="20px">
          <WrapItem>
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
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {title}
                  </Box>
                  <Box>
                    {area} m<sup>2</sup>
                  </Box>
                  <Divider />
                  <Box>{paragraph}</Box>
                </Box>
              </Box>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};
