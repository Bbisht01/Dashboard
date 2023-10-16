// import logo from './logo.svg'
// import './App.css'
import Content from './Components/Content/Content'
import SideBar from './Components/Sidebar/SideBar'
import { Grid, GridItem } from '@chakra-ui/react'

function App () {
  return (
    // <div
    //   className='App'
    //   style={{ display: 'flex', justifyContent: 'space-between' }}
    // >
    <Grid
      // h='3em'
      templateAreas={`"nav main"
                  "nav main"`}
      gridTemplateColumns={'14.5em 1fr'}
      // templateColumns='repeat(4, 1fr)'
      gap='1'
    >
      <GridItem className='sidebar-view' area={'nav'}>
        <SideBar />
      </GridItem>
      <GridItem
        h={'auto'}
        className='content-view'
        area={'main'}
        bg={'#f3f5f9'}
        overflow={'scroll'}
      >
        <Content />
      </GridItem>
    </Grid>
    // </div>
  )
}

export default App
