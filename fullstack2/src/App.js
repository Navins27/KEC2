import {BrowserRouter, Routes,  Route,} from "react-router-dom"
import Layout from "./Event/Layout"
import Contact from "./Event/Contact"
import Homes from "./Event/Homes"
import About from "./Event/About"
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      
          <Route path="/"element={<Layout/>}>
            <Route index element={<Homes/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
           
      </Route>
    </Routes>
    </BrowserRouter>
  )
}