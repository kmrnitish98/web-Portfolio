import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Navbar from "./nav/Navbar"
export function Portfolio() {
  return (
    <div>
       <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='' Component={Home}></Route>
                <Route path='about' Component={About}></Route>
                <Route path='project' Component={Project}></Route>
                <Route path='contact' Component={Contact}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  )
}
export default Portfolio


