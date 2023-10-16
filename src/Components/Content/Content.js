import React from 'react'
import Navbar from '../Navbar/Navbar'
import Cards from '../Card/Cards'
import BarChartView from '../BarChart/BarChartView'
import DonutChartView from '../DonutChart/DonutChartView'
import TableView from '../Table/Table'
import { Grid, GridItem } from '@chakra-ui/react'

import './Content.css'

export default function Content () {
  return (
    <Grid className='content-view' templateRows='repeat(4, 1fr)' h='0'>
      <GridItem rowSpan={1}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={1}>
        <Cards />
      </GridItem>
      <GridItem rowSpan={1}>
        <Grid templateColumns='repeat(6, 1fr)' gap={8}>
          <GridItem colSpan={4}>
            <BarChartView />
          </GridItem>
          <GridItem colSpan={2}>
            <DonutChartView />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem rowSpan={1}>
        <TableView />
      </GridItem>
    </Grid>
  )
}
