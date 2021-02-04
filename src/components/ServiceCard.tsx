import * as React from "react";
import { Box, WrapItem, Center, Wrap, Divider } from "@chakra-ui/react";

interface CardProps {
  title: string;
  text: string;
}

export const ServiceCard: React.FC<CardProps> = ({title, text}) => {
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
                    
                  </Box>
                  <Divider />
                  <Box>{text}</Box>
                </Box>
              </Box>
            </Center>
          </WrapItem>
        </Wrap>
      </Box>
    </div>
  );
};
