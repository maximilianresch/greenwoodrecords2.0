import * as React from "react";
import styles from "./index.module.css";
import useResponsive from "../helper/useResponsive";
import {
  Box,
  List,
  ListItem,
  Link,
  Stack,
  HStack,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

interface Links {
  name: string;
  href: string;
}

const MenuLinks: Links[] = [
  {
    name: "Studio",
    href: "#studio",
  },
  {
    name: "Equipment",
    href: "#equipment",
  },
  {
    name: "Leistungen",
    href: "#services",
  },
  {
    name: "Galerie",
    href: "#gallery",
  },
  {
    name: "Kontakt",
    href: "#contact",
  },
];

export const Navigation: React.FC = () => {
  const { isDesktop } = useResponsive();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className={styles.nav}>
      {isDesktop ? (
        <Stack direction="row" spacing="20px" p="10px" fontSize="x-large">
          <Box h="auto" w="100%">
            <List d="flex" justifyContent="space-around">
              <Link href="#top">
                <Heading>greenwoodrecords</Heading>
              </Link>
              {MenuLinks.map((link, i) => {
                return (
                  <Link key={i} href={link.href}>
                    <ListItem>{link.name}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
        </Stack>
      ) : (
        <HStack direction="row" justify="space-between" p="7px">
          <Box pl="15px">
            <Link fontSize="25px">greenwoodrecords</Link>
          </Box>
          <Box pr="20px">
            <Menu>
              <IconButton
                onClick={onOpen}
                as={Button}
                aria-label="Call Sage"
                icon={<BiMenuAltRight fontSize="30px" />}
                color="black"
                size="sm"
              />
              <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                      Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                      {MenuLinks.map((link, i) => {
                        return (
                          <Link key={i} href={link.href}>
                            <MenuItem>{link.name}</MenuItem>
                          </Link>
                        );
                      })}
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            </Menu>
          </Box>
        </HStack>
      )}
    </Box>
  );
};
