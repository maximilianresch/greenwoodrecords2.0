import {
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableCaption,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading
} from "@chakra-ui/react";
import style from './style.module.css'
import Image from 'next/image'

export default function Equipment() {
  return (
    <div id="equipment">
      <Heading pt="40px" pb="30px" as="h1" size="xl">Equipment</Heading>
      <Box className={style.img} >
      <Image   src='/Equipment-min.jpg' alt="Foto vom Equipment und Rack"  
      layout="responsive"
      width={700}
      height={475} />
      </Box>
      
      <Tabs pt="16" size="sm" align="center" isFitted variant="soft-rounded">
      <Box>
        <TabList flexWrap="wrap">
          <Tab>Mikrofone</Tab>
          <Tab>Instrumente</Tab>
          <Tab>Outboard + Monitore</Tab>
          <Tab>Wandler</Tab>
        </TabList>
        </Box>

        {/*Mikrofone*/}
        <TabPanels>
          <TabPanel>
            <Box pt="15px">
              <Table size="sm">
                <TableCaption>
                  Natürlich kann ich Ihnen zu der Technik noch genauere Infos
                  geben.
                </TableCaption>
                <Tbody>
                  <Tr>
                    <Td>2x AKG C414 B-ULS TLII</Td>
                    <Td>2x AKG C214</Td>
                    <Td>1x AKG D112</Td>
                  </Tr>
                  <Tr>
                    <Td>2x AKG D707c</Td>
                    <Td>1x AKG D12</Td>
                    <Td>2x Sony C48</Td>
                  </Tr>

                  <Tr>
                    <Td>1x Sennheiser MD441</Td>
                    <Td>2x t.bone RB500</Td>
                    <Td>2x t.bone MB75</Td>
                  </Tr>

                  <Tr>
                    <Td>1x Shure SM57</Td>
                    <Td>1x Shure SM58</Td>
                    <Td>1x Neumann TLM 102 Studio Set</Td>
                  </Tr>
                  <Tr>
                    <Td>2x Neumann KM184</Td>
                    <Td>1x Neumann KM84</Td>
                    <Td>1x Neumann U87</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Neumann Swivel Mount</Td>
                    <Td>2x Neumann CMV563 + Netzteil</Td>
                    <Td></Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
          {/*Instrumente*/}
          <TabPanel>
            {" "}
            <Box pt="15px">
              <Table size="sm">
                <TableCaption>
                  Natürlich kann ich Ihnen zu der Technik noch genauere Infos
                  geben.
                </TableCaption>
                <Tbody>
                  <Tr>
                    <Td>1x Fender Rhodes 73 Mk1</Td>
                    <Td>1x Sonor New Beat Vintage</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Yamaha Stage Custom</Td>
                    <Td>1x Yamaha DX7</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Lakland</Td>
                    <Td>1x Marcus Miller V7</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
          {/*Outboard + Monitore*/}
          <TabPanel>
            <Box pt="15px">
              <Table size="sm">
                <TableCaption>
                  Natürlich kann ich Ihnen zu der Technik noch genauere Infos
                  geben.
                </TableCaption>
                <Tbody>
                  <Tr>
                    <Td>1x SPL Goldmike</Td>
                    <Td>2x AEA RPQ500</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Klark Teknik 76-KT</Td>
                    <Td>1x Klark Teknik EQP-KT</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Quad 405-2</Td>
                    <Td>2x Behringer Powerplay</Td>
                  </Tr>
                  <Tr>
                    <Td>1x Studio Projects VTB1</Td>
                    <Td>2x Yamaha NS10</Td>
                  </Tr>
                  <Tr>
                    <Td>2x ATC scm45</Td>
                    <Td>Crane Song Avocet</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
          {/*Wandler*/}
          <TabPanel>
            {" "}
            <Box pt="15px">
              <Table size="sm">
                <TableCaption>
                  Natürlich kann ich Ihnen zu der Technik noch genauere Infos
                  geben.
                </TableCaption>
                <Tbody>
                  <Tr>
                    <Td>
                      Direct Out Prodigy mit 32 In/out Mic Pre -8ch AES/EBU
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
