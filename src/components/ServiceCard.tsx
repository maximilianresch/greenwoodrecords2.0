import * as React from "react";
import { Box, Divider, Heading } from "@chakra-ui/react";

interface CardProps {
  title: string;
  firstline: string;
  secondline: string;
  thirdline?: string;
}

export const ServiceCard: React.FC<CardProps> = ({
  title,
  firstline,
  secondline,
  thirdline,
}) => {
  return (
    <div>
      <Box w={[250, 0, 200, 270, 350]} >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          borderColor="whiteAlpha.700"
          shadow="lg"
          bgColor="#E4DCCF"
          color="#0D0D0D"
        >
          <Box p="4">
            <Heading
              mt="1"
              size="md"
              fontWeight="semibold"
              lineHeight="tight"
              isTruncated
            >
              {title}
            </Heading>
            <Box lineHeight="2">
              {firstline} <br />
              {secondline} <br />
              {thirdline} 
            </Box>
            <Divider pt="5"/>
            exkl. 20% MwSt.
          </Box>
        </Box>
      </Box>
    </div>
  );
};
