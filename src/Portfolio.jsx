import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./component/Home"
import About from "./component/About"
import Project from "./component/Project"
import Contact from "./component/Contact"
import Navbar from "./nav/Navbar"
import Footer from "./nav/footer"
export function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
       <BrowserRouter>
            <Navbar/>
            <section className="flex-1">
              <Routes>
                <Route path='' Component={Home}></Route>
                <Route path='about' Component={About}></Route>
                <Route path='project' Component={Project}></Route>
                <Route path='contact' Component={Contact}></Route>
              </Routes>
            </section>
            <Footer/>
       </BrowserRouter>
    </div>
  )
}
export default Portfolio


