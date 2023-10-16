import React from 'react'
import { Box, Flex, Text, Card, Select } from '@chakra-ui/react'
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic
} from '../ChartData/chartData'
import BarChart from './BarChart'

export default function BarChartView () {
  const dropDownOptions = [
    {
      label: 'Half Yearly',
      value: 'Half Yearly'
    },
    {
      label: 'Annually',
      value: 'Annually'
    }
    // {
    //   label: 'Option 3',
    //   value: 'Option3'
    // }
  ]
  return (
    <Card direction='column' mt='1em'>
      <Flex
        // justify='space-between'
        align='start'
        // px='10px'
        // pt='5px'
      >
        <Flex
          flexDirection='column'
          align='start'
          me='20px'
          padding={'0.8em 0 0 1em'}
        >
          <Text
            color={'#232323'}
            fontSize='20px'
            fontWeight='700'
            textAlign={'left'}
          >
            Overview
          </Text>
          <Text color='#bfbfbf' fontSize='sm' fontWeight='500'>
            Monthly Earning
          </Text>
        </Flex>
        <Flex
          backgroundColor={'#fafbff'}
          borderRadius={'5px'}
          alignSelf={'flex-end'}
          marginLeft={'60%'}
          marginBottom={'3%'}
        >
          <Select
            placeholder='Quaterly'
            size={'xs'}
            borderRadius={'5px'}
            color={'#bfbfbf'}
          >
            {dropDownOptions.map((data, index) => (
              <option key={index} value={data.value}>
                {data.label}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Box h='19em' pt='1em'>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </Box>
    </Card>
  )
}
