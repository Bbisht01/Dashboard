import React from 'react'
import {
  Card,
  CardBody,
  Image,
  Text,
  Stack,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'
import './Cards.css'
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'
export default function Cards () {
  const cardData = [
    {
      img: '/dollar-sign.svg',
      backgroundColor: '#e4fbf2',
      title: 'Earnings',
      cardHeading: '$198K',
      growth: 37.8,
      recur: 'month'
    },
    {
      img: '/order.svg',
      backgroundColor: '#e7dbff',
      title: 'Orders',
      cardHeading: '$2.4K',
      growth: -2,
      recur: 'month'
    },
    {
      img: '/balance-money.svg',
      backgroundColor: '#cdf3ff',
      title: 'Balance',
      cardHeading: '$2.4K',
      growth: -2,
      recur: 'month'
    },
    {
      img: '/sales.svg',
      backgroundColor: '#f1c1e6 ',
      title: 'Total Sales',
      cardHeading: '$89K',
      growth: 11,
      recur: 'week'
    }
  ]

  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
      {cardData.map((data, index) => (
        <GridItem>
          <Card
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <div
              className='image-wrapper'
              style={{ backgroundColor: data.backgroundColor }}
            >
              <Image
                className='cards-icon'
                objectFit='cover'
                width='60%'
                // height='35%'
                alignSelf={'center'}
                // borderRadius={'50%'}
                src={data.img}
                alt='Caffe Latte'
                backgroundColor={data.backgroundColor}
              />
            </div>

            <Stack width={'90%'} textAlign={'left'}>
              <CardBody>
                <Text
                  py='2'
                  fontSize={'12px'}
                  color={'#d4d4d4'}
                  fontWeight={'500'}
                >
                  {data.title}
                </Text>
                <Heading size='sm' f>
                  {data.cardHeading}
                </Heading>

                <Text
                  py='2'
                  size={'sm'}
                  fontSize={'12px'}
                  color={'#54575b'}
                  display={'flex'}
                >
                  {' '}
                  {data.growth > 0 ? (
                    <FiArrowUp color='#6cc687' style={{ marginTop: '3px' }} />
                  ) : (
                    <FiArrowDown color='#d04943' style={{ marginTop: '3px' }} />
                  )}
                  <Text
                    color={data.growth > 0 ? '#6cc687' : '#d04943'}
                    fontWeight={600}
                  >
                    {' '}
                    {data.growth}%&nbsp;
                  </Text>
                  this {data.recur}
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </GridItem>
      ))}
    </Grid>
  )
}
