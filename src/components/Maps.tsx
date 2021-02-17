import * as React from "react";
import { AspectRatio, Box } from "@chakra-ui/react";

export const Maps: React.FC = () => {
  return (
    <Box>
      <AspectRatio ratio={9 / 4}>
        <div>
          <iframe
            width="100%"
            height="500"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Gf%C3%B6hlerstra%C3%9Fe%2034,%203552%20Lengenfeld,%20%C3%96sterreich+(Greenwoodrecords)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </AspectRatio>
    </Box>
  );
};
