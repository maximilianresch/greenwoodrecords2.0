import * as React from "react";
import styles from "./index.module.css";
import {
  useMediaQuery,
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
} from "@chakra-ui/react";
import { BsMusicNoteList } from "react-icons/bs";


const menuLinks = [
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
  const [isLargerThan1280] = useMediaQuery("(min-width: 1024px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className={styles.nav}>
      {isLargerThan1280 ? (
        <Stack direction="row" spacing="20px">
          <Box bg="tomato" h="auto" w="100%" >
            <List d="flex" justifyContent="space-around">
              {menuLinks.map((link) => {
                return (
                  <Link>
                    <ListItem href={link.href}>{link.name}</ListItem>
                  </Link>
                );
              })}
            </List>
          </Box>
        </Stack>
      ) : (
        <HStack
          direction="row"
          justify="space-between"
          bgColor="blue.500"
        >
          <Box pl="15px">
            <Link fontSize="25px">greenwoodrecords</Link>
          </Box>
          <Box pr="20px">
            <Menu>
              <IconButton
                onClick={onOpen}
                as={Button}
                aria-label="Call Sage"
                icon={<BsMusicNoteList fontSize="25px" />}
                fontSize="20px"
                color="black"
              />
              <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                      Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                      {menuLinks.map((link, i) => {
                        return (
                          <Link href={link.href}>
                            <MenuItem key={i}>{link.name}</MenuItem>
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
