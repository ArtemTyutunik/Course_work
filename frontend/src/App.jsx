import Routing from "./routes.jsx";
import Header from "./components/Header.jsx";
import Aside from "./components/Aside.jsx";
import {Box} from "@mui/material";

function App() {
  return (
    <>
      <Header/>
      <Box display={'flex'}>
        <Aside/>
          <Box ml={'300px'}>
              <Routing/>
          </Box>
      </Box>
    </>
  )
}

export default App
