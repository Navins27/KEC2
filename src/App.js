// import React from 'react'
// import Hello from './Hello'
// import Myclass from './Myclass'
// //import Ter from './Ter'
// export default function App() {
//   return (
//     <div>
//       <Hello/>
//       <Myclass/>
      
//     </div>
//   )
// }
import {BrowserRouter, Routes,  Route,} from "react-router-dom"
import Layout from "./Layout"
import Contact from "./Contact"
import Homes from "./Homes"
import About from "./About"
import Counter from "./Counter"
import Effect from "./Effect"
import Callback from "./Callback"
export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      
          <Route path="/"element={<Layout/>}>
            <Route index element={<Homes/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="counter" element={<Counter/>}/>
            <Route path="effect" element={<Effect/>}/>
            <Route path="callback" element={<Callback/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
// import React from 'react'
// import Basic from './Event/Basic'
// import Counter from './Event/Hooks/Counter'
// export default function App() {
//   return (
//     <div>
//       <Basic/>
//       <Counter/>
//     </div>
//   )
// }

