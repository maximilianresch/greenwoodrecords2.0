import * as React from "react";
import { Box, Center, Divider } from "@chakra-ui/react";

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
        <Center>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            borderColor="white"
            bgColor="purple.900"
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
                {firstline} <br />
                {secondline} <br />
                {thirdline} <br />
              </Box>
              <Divider />
              exkl. 20% MwSt.
            </Box>
          </Box>
        </Center>
    </div>
  );
};