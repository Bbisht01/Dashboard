import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
// import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue
} from '@chakra-ui/react'
import { FaHandsClapping } from 'react-icons/fa6'

import './Navbar.css'

export default function Navbar () {
  const searchIconColor = useColorModeValue('gray.500', 'white')
  const inputText = useColorModeValue('gray.700', 'gray.100')
  return (
    <div className='head-navbar'>
      <div className='navbar-name'>
        Hello sahrukh &nbsp; <FaHandsClapping color='#e4c29c' />
      </div>
      <InputGroup
        w={{ base: '90%', md: '200px' }}
        borderRadius={'10px'}
        mb={'-15px'}
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
              icon={<SearchIcon color={searchIconColor} w='12px' h='12x' />}
            ></IconButton>
          }
        />
        <Input
          variant='search'
          fontSize='sm'
          bg={'#ffffff' ? '#ffffff' : 'gray.500'}
          color={inputText}
          fontWeight='500'
          _placeholder={{ color: 'gray.400', fontSize: '14px' }}
          borderRadius={'10px' ? '10px' : '30px'}
          placeholder={'Search' ? 'Search' : 'Search...'}
        />
      </InputGroup>
    </div>
  )
}
