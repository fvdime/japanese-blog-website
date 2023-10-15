import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Write from "./pages/Write"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
      <Route path="/write" element={<Write/>}/>
      {/* auth */}
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    )
}

export default App
