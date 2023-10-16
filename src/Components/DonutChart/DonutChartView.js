import React from 'react'
import { Box, Flex, Text, Card } from '@chakra-ui/react'
import DonutChart from './DonutChart'
import {
  donutChartDataCharts1,
  donutChartOptionsCharts1
} from '../ChartData/chartData'

export default function DonutChartView () {
  // const textColor = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Card mt='1em' direction='column'>
      <Flex align='start' px='10px' pt='5px'>
        <Flex
          flexDirection='column'
          align='start'
          me='20px'
          padding={'0.5em 0 0 0.8em'}
        >
          <Text
            color={'#232323'}
            fontSize='20px'
            fontWeight='700'
            textAlign={'left'}
          >
            Customers
          </Text>
          <Text color='#bfbfbf' fontSize='sm' fontWeight='500'>
            Customers that buy products
          </Text>
        </Flex>
      </Flex>
      <Box h='18em' mt='1em' pt='2em'>
        <DonutChart
          chartData={donutChartDataCharts1}
          chartOptions={donutChartOptionsCharts1}
        />
      </Box>
    </Card>
  )
}
