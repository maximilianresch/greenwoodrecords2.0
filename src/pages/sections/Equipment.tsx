import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function Equipment() {
  return (
    <div id="equipment">
      <Box>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Mikrofone</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
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
      <Box pt="35px">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Instrumente</Th>
              <Th>Outboard + Monitore</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1x Fender Rhodes 73 Mk1</Td>
              <Td>1x SPL Goldmike</Td>
            </Tr>
            <Tr>
              <Td>1x Sonor New Beat Vintage</Td>
              <Td>2x AEA RPQ500</Td>
            </Tr>
            <Tr>
              <Td>1x Yamaha Stage Custom</Td>
              <Td>1x Klark Teknik 76-KT</Td>
            </Tr>
            <Tr>
              <Td>1x Yamaha DX7</Td>
              <Td>1x Klark Teknik EQP-KT</Td>
            </Tr>
            <Tr>
              <Td>1x Lakland</Td>
              <Td>1x Quad 405-2</Td>
            </Tr>
            <Tr>
              <Td>1x Marcus Miller V7</Td>
              <Td>2x Behringer Powerplay</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>1x Studio Projects VTB1</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>2x Yamaha NS10</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>2x ATC scm45</Td>
            </Tr>
            <Tr>
              <Td></Td>
              <Td>Crane Song Avocet</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box pt="35px">
        <Table size="sm">
          <TableCaption>
            Natürlich kann ich Ihnen zu der Technik noch genauere Infos geben.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Wandler</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Direct Out Prodigy mit 32 In/out Mic Pre -8ch AES/EBU</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}
