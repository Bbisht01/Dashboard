import React from 'react'

import { SearchIcon } from '@chakra-ui/icons'

import {
  Box,
  Flex,
  Text,
  Card,
  Select,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react'

import './Table.css'

export default function TableView () {
  const searchIconColor = useColorModeValue('gray.500', '#e8e8ec')
  const inputText = useColorModeValue('gray.700', 'gray.100')

  const tableData = [
    {
      img: '/Polygon 01.jpg',
      name: 'Abstract 3d',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
      stock: 32,
      price: 45.99,
      currency: '$',
      totalSales: 20
    },
    {
      img: '/Polygon 01.jpg',
      name: 'Sarpheme illustration',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
      stock: 32,
      price: 45.99,
      currency: '$',
      totalSales: 20
    },
    {
      img: '/Polygon 01.jpg',
      name: 'Abstract 3d',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit.',
      stock: 32,
      price: 45.99,
      currency: '$',
      totalSales: 20
    }
  ]

  const dropDownOptions = [
    {
      label: 'last 20 days',
      value: 'Option1'
    },
    {
      label: 'last 10 days',
      value: 'Option2'
    }
    // {
    //   label: 'last 5 days',
    //   value: 'Option3'
    // }
  ]

  return (
    <Card mx='auto' mt='20px' direction='column' padding={'10px'}>
      <Flex align='start' px='10px' pt='15px'>
        <Text
          color={'#232323'}
          fontSize='20px'
          fontWeight='700'
          textAlign={'left'}
        >
          Product Sell
        </Text>

        <InputGroup
          w={{ base: '100%', md: '200px' }}
          width={'10%'}
          // backgroundColor={'#e8e8ec'}
          size={'xs'}
          marginLeft={'52%'}
        >
          <InputLeftElement
            children={
              <IconButton
                bg='inherit'
                borderRadius='inherit'
                _hover='none'
                _active={{
                  bg: 'inherit',
                  transform: 'none',
                  borderColor: 'transparent'
                }}
                _focus={{
                  boxShadow: 'none'
                }}
                icon={<SearchIcon color={searchIconColor} w='15px' h='15px' />}
              ></IconButton>
            }
          />
          <Input
            variant='search'
            fontSize='sm'
            bg={'#fafbff' ? '#fafbff' : 'gray.500'}
            color={inputText}
            fontWeight='500'
            _placeholder={{ color: 'gray.500', fontSize: '14px' }}
            borderRadius={'10px' ? '10px' : '30px'}
            placeholder={'Search' ? 'Search' : 'Search...'}
          />
        </InputGroup>
        <Select
          placeholder='last 33 days'
          size={'xs'}
          borderRadius={'5px'}
          color={'#bfbfbf'}
          width={'12%'}
          marginLeft={'2%'}
          bg={'#fafbff'}
        >
          {dropDownOptions.map((data, index) => (
            <option key={index} value={data.value}>
              {data.label}
            </option>
          ))}
        </Select>
      </Flex>
      <Box mt='30px'>
        <TableContainer>
          <Table size='sm'>
            <Thead>
              <Th className='table-header product-name'>Product Name</Th>
              <Th className='table-header stocks'>Stock</Th>
              <Th className='table-header price' isNumeric>
                Price
              </Th>
              <Th className='table-header sales' isNumeric>
                Total sales
              </Th>
            </Thead>
            <Tbody>
              {tableData.map((data, index) => {
                return (
                  <Tr className='table-data rows' key={index}>
                    <Td className='table-data product-details'>
                      <Grid
                        h='3em'
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(6, 1fr)'
                        gap={1}
                      >
                        <GridItem rowSpan={2} colSpan={1}>
                          <Image
                            className='product-images'
                            objectFit='cover'
                            src={data.img}
                            alt='3d'
                          />
                        </GridItem>
                        <GridItem colSpan={5}>{data.name}</GridItem>
                        <GridItem
                          className='table-data product-description'
                          colSpan={5}
                        >
                          {data.description}
                        </GridItem>
                      </Grid>
                    </Td>
                    <Td>{data.stock} in stocks</Td>
                    <Td className='table-data price' isNumeric>
                      {data.currency} {data.price}
                    </Td>
                    <Td className='sales' isNumeric>
                      {data.totalSales}
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
          </Table>
        </TableContainer>
      </Box>
    </Card>
  )
}
