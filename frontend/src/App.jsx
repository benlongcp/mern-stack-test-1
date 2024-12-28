import { Button, Box } from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom'

import CreatePage from "./pages/CreatePage.jsx"
import Homepage from './pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <div>

      {/* <Button>hello</Button> */}

      <Box minH={'100vh'} >

        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>

      </Box>

    </div>
  )
}

export default App
